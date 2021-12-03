using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Data;
using FootballManagerApi.Entities;
using FootballManagerApi.ServiceAbstracts;
using Microsoft.EntityFrameworkCore;

namespace FootballManagerApi.ServiceImplementations
{
    public class ManagementPositionService : IManagementPositionService
    {
        private readonly ApplicationDbContext _context;

        public ManagementPositionService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ManagementPosition>> GetAllAsync()
        {
            return await _context.ManagementPositions.ToListAsync();
        }

        public async Task<ManagementPosition> GetAsync(int id)
        {
            return await _context.ManagementPositions.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task UpdateAsync(int id, ManagementPosition managementPosition)
        {
            await _context.ManagementPositions.FirstOrDefaultAsync(x => x.Id == id);
            _context.Entry(managementPosition).State = EntityState.Modified;

            await _context.SaveChangesAsync();
        }

        public async Task<ManagementPosition> CreateAsync(ManagementPosition managementPosition)
        {
            await _context.ManagementPositions.AddAsync(managementPosition);
            await _context.SaveChangesAsync();

            return managementPosition;
        }

        public async Task DeleteAsync(int id)
        {
            var managementPosition = await _context.ManagementPositions.FirstOrDefaultAsync(x => x.Id == id);
            _context.ManagementPositions.Remove(managementPosition);
            await _context.SaveChangesAsync();
        }
    }
}