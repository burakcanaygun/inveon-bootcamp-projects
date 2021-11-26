using System.Collections.Generic;
using System.Threading.Tasks;
using MovieDB.DTOs.Actor;

namespace MovieDB.Interfaces
{
    public interface IActorRepository
    {
        Task<List<ActorDTO>> GetAllActors();
        Task<ActorDTO> GetActorById(int id);
        Task<ActorDTO> CreateActor(ActorCreateDTO actor);
        Task<ActorDTO> UpdateActor(int id, ActorCreateDTO actor);
        Task<ActorDTO> DeleteActor(int id);
    }
}