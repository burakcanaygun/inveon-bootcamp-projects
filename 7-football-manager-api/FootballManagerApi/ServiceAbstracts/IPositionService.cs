using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Entities;

namespace FootballManagerApi.ServiceAbstracts
{
    public interface IPositionService
    {
        public Task<IEnumerable<Position>> GetAllAsync();
        public Task<Position> GetAsync(int id);
        public Task UpdateAsync(int id, Position position);
        public Task<Position> CreateAsync(Position position);
        public Task DeleteAsync(int id);
    }
}