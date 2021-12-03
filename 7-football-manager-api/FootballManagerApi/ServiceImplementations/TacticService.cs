using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Data;
using FootballManagerApi.Entities;
using FootballManagerApi.ServiceAbstracts;
using Microsoft.EntityFrameworkCore;

namespace FootballManagerApi.ServiceImplementations
{
    public class TacticService : ITacticService
    {
        private readonly ApplicationDbContext _context;

        public TacticService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Tactic>> GetAllAsync()
        {
            return await _context.Tactics.ToListAsync();
        }

        public async Task<Tactic> GetAsync(int id)
        {
            return await _context.Tactics.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task UpdateAsync(int id, Tactic tactic)
        {
            await _context.Tactics.FirstOrDefaultAsync(x => x.Id == id);
            _context.Entry(tactic).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<Tactic> CreateAsync(Tactic tactic)
        {
            await _context.Tactics.AddAsync(tactic);
            await _context.SaveChangesAsync();
            return tactic;
        }

        public async Task DeleteAsync(int id)
        {
            var tactic = await _context.Tactics.FirstOrDefaultAsync(x => x.Id == id);
            _context.Tactics.Remove(tactic);
            await _context.SaveChangesAsync();
        }
    }
}