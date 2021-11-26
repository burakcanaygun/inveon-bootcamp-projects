using System.Collections.Generic;
using System.Threading.Tasks;
using MovieDB.DTOs.Movie;

namespace MovieDB.Interfaces
{
    public interface IMovieRepository
    {
        Task<List<MovieDTO>> GetAllMovies();
        Task<MovieDTO> GetMovieById(int id);
        Task<MovieDTO> CreateMovie(MovieCreateDTO movie);
        Task<MovieDTO> UpdateMovie(int id, MovieCreateDTO movie);
        Task<MovieDTO> DeleteMovie(int id);
    }
}