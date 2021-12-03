using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Entities;

namespace FootballManagerApi.ServiceAbstracts
{
    public interface ICoachService
    {
        public Task<IEnumerable<Coach>> GetAllAsync();
        public Task<Coach> GetAsync(int id);
        public Task UpdateAsync(int id, Coach coach);
        public Task<Coach> CreateAsync(Coach coach);
        public Task DeleteAsync(int id);
    }
}