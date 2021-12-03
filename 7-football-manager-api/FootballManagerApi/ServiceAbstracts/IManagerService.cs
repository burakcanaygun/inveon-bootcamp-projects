using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Entities;

namespace FootballManagerApi.ServiceAbstracts
{
    public interface IManagerService
    {
        public Task<IEnumerable<Manager>> GetAllAsync();
        public Task<Manager> GetAsync(int id);
        public Task UpdateAsync(int id, Manager manager);
        public Task<Manager> CreateAsync(Manager manager);
        public Task DeleteAsync(int id);
    }
}