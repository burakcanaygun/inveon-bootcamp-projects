using System.Collections.Generic;
using System.Threading.Tasks;
using MovieDB.DTOs.Director;

namespace MovieDB.Interfaces
{
    public interface IDirectorRepository
    {
        Task<List<DirectorDTO>> GetAllDirectors();
        Task<DirectorDTO> GetDirectorById(int id);
        Task<DirectorDTO> CreateDirector(DirectorCreateDTO actor);
        Task<DirectorDTO> UpdateDirector(int id, DirectorCreateDTO actor);
        Task<DirectorDTO> DeleteDirector(int id);
    }
}