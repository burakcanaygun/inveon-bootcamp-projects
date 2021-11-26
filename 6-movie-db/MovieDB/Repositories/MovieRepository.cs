using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MovieDB.Data;
using MovieDB.DTOs.Movie;
using MovieDB.Interfaces;
using MovieDB.Models;

namespace MovieDB.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public MovieRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<MovieDTO>> GetAllMovies()
        {
            var movies = await _context.Movies
                .Include(x => x.Actors)
                .Include(x => x.Directors)
                .Include(x => x.Writers)
                .AsSplitQuery()
                .ToListAsync();
            return _mapper.Map<List<MovieDTO>>(movies);
        }

        public async Task<MovieDTO> GetMovieById(int id)
        {
            var movie = await _context.Movies
                .Include(x => x.Actors)
                .Include(x => x.Directors)
                .Include(x => x.Writers)
                .AsSplitQuery()
                .FirstOrDefaultAsync(m => m.MovieId == id);
            return _mapper.Map<MovieDTO>(movie);
        }

        public async Task<MovieDTO> CreateMovie(MovieCreateDTO movie)
        {
            var movieToCreate = _mapper.Map<Movie>(movie);
            _context.Movies.Add(movieToCreate);
            await _context.SaveChangesAsync();
            return _mapper.Map<MovieDTO>(movieToCreate);
        }

        public async Task<MovieDTO> UpdateMovie(int id, MovieCreateDTO movie)
        {
            var movieToUpdate = await _context.Movies.FirstOrDefaultAsync(m => m.MovieId == id);
            if (movieToUpdate == null)
            {
                return null;
            }

            _mapper.Map(movie, movieToUpdate);
            await _context.SaveChangesAsync();
            return _mapper.Map<MovieDTO>(movieToUpdate);
        }

        public async Task<MovieDTO> DeleteMovie(int id)
        {
            var movieToDelete = await _context.Movies.FirstOrDefaultAsync(m => m.MovieId == id);
            if (movieToDelete == null)
            {
                return null;
            }

            _context.Movies.Remove(movieToDelete);
            await _context.SaveChangesAsync();
            return _mapper.Map<MovieDTO>(movieToDelete);
        }
    }
}