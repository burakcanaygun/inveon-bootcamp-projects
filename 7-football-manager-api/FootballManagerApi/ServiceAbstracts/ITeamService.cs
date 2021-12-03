using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Entities;

namespace FootballManagerApi.ServiceAbstracts
{
    public interface ITeamService
    {
        public Task<IEnumerable<Team>> GetAllAsync();
        public Task<IEnumerable<Team>> GetAllWithFootballersAsync();
        public Task<Team> GetAsync(int id);
        public Task UpdateAsync(int id, Team team);
        public Task<Team> CreateAsync(Team team);
        public Task DeleteAsync(int id);
    }
}