using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Data;
using FootballManagerApi.Entities;
using FootballManagerApi.ServiceAbstracts;
using Microsoft.EntityFrameworkCore;

namespace FootballManagerApi.ServiceImplementations
{
    public class CoachService : ICoachService
    {
        private readonly ApplicationDbContext _context;

        public CoachService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Coach>> GetAllAsync()
        {
            var coaches = await _context.Coaches.ToListAsync();
            return coaches;
        }

        public async Task<Coach> GetAsync(int id)
        {
            var coach = await _context.Coaches.FirstOrDefaultAsync(c => c.Id == id);
            return coach;
        }

        public async Task UpdateAsync(int id, Coach coach)
        {
            await _context.Coaches.FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Coach> CreateAsync(Coach coach)
        {
            var coachToCreate = _context.Coaches.Add(coach);
            await _context.SaveChangesAsync();
            return coachToCreate.Entity;
        }

        public async Task DeleteAsync(int id)
        {
            var coach = await _context.Coaches.FirstOrDefaultAsync(c => c.Id == id);
            _context.Coaches.Remove(coach);
            await _context.SaveChangesAsync();
        }
    }
}