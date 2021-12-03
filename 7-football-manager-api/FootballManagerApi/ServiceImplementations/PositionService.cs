using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Data;
using FootballManagerApi.Entities;
using FootballManagerApi.ServiceAbstracts;
using Microsoft.EntityFrameworkCore;

namespace FootballManagerApi.ServiceImplementations
{
    public class PositionService : IPositionService
    {
        private readonly ApplicationDbContext _context;

        public PositionService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Position>> GetAllAsync()
        {
            return await _context.Positions.ToListAsync();
        }

        public async Task<Position> GetAsync(int id)
        {
            return await _context.Positions.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task UpdateAsync(int id, Position position)
        {
            var positionToUpdate = await _context.Positions.FirstOrDefaultAsync(x => x.Id == id);
            _context.Entry(position).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<Position> CreateAsync(Position position)
        {
            await _context.Positions.AddAsync(position);
            await _context.SaveChangesAsync();
            return position;
        }

        public async Task DeleteAsync(int id)
        {
            var positionToDelete = await _context.Positions.FirstOrDefaultAsync(x => x.Id == id);
            _context.Positions.Remove(positionToDelete);
            await _context.SaveChangesAsync();
        }
    }
}