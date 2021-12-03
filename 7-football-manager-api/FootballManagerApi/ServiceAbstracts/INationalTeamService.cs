using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Entities;

namespace FootballManagerApi.ServiceAbstracts
{
    public interface INationalTeamService
    {
        public Task<IEnumerable<NationalTeam>> GetAllAsync();
        public Task<NationalTeam> GetAsync(int id);
        public Task UpdateAsync(int id, NationalTeam nationalTeam);
        public Task<NationalTeam> CreateAsync(NationalTeam nationalTeam);
        public Task DeleteAsync(int id);
    }
}