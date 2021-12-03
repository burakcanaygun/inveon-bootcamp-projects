using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Data;
using FootballManagerApi.Entities;
using FootballManagerApi.ServiceAbstracts;
using Microsoft.EntityFrameworkCore;

namespace FootballManagerApi.ServiceImplementations
{
    public class NationalTeamService : INationalTeamService
    {
        private readonly ApplicationDbContext _context;

        public NationalTeamService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<NationalTeam>> GetAllAsync()
        {
            return await _context.NationalTeams.ToListAsync();
        }

        public async Task<NationalTeam> GetAsync(int id)
        {
            return await _context.NationalTeams.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task UpdateAsync(int id, NationalTeam nationalTeam)
        {
            _context.Entry(nationalTeam).State = EntityState.Modified;

            await _context.SaveChangesAsync();
        }

        public async Task<NationalTeam> CreateAsync(NationalTeam nationalTeam)
        {
            _context.NationalTeams.Add(nationalTeam);
            await _context.SaveChangesAsync();

            return nationalTeam;
        }

        public async Task DeleteAsync(int id)
        {
            var nationalTeam = await _context.NationalTeams.FindAsync(id);
            _context.NationalTeams.Remove(nationalTeam);
            await _context.SaveChangesAsync();
        }
    }
}