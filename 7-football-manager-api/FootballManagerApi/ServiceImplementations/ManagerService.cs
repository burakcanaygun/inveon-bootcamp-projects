using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Data;
using FootballManagerApi.Entities;
using FootballManagerApi.ServiceAbstracts;
using Microsoft.EntityFrameworkCore;

namespace FootballManagerApi.ServiceImplementations
{
    public class ManagerService : IManagerService
    {
        private readonly ApplicationDbContext _context;

        public ManagerService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Manager>> GetAllAsync()
        {
            return await _context.Managers.ToListAsync();
        }

        public async Task<Manager> GetAsync(int id)
        {
            return await _context.Managers.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task UpdateAsync(int id, Manager manager)
        {
            var managerToUpdate = await _context.Managers.FirstOrDefaultAsync(x => x.Id == id);
            _context.Entry(manager).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<Manager> CreateAsync(Manager manager)
        {
            await _context.Managers.AddAsync(manager);
            await _context.SaveChangesAsync();
            return manager;
        }

        public async Task DeleteAsync(int id)
        {
            var manager = await _context.Managers.FirstOrDefaultAsync(x => x.Id == id);
            _context.Managers.Remove(manager);
            await _context.SaveChangesAsync();
        }
    }
}