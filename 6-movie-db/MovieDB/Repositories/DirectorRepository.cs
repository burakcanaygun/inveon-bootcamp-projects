using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MovieDB.Data;
using MovieDB.DTOs.Director;
using MovieDB.Interfaces;
using MovieDB.Models;

namespace MovieDB.Repositories
{
    public class DirectorRepository : IDirectorRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public DirectorRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<DirectorDTO>> GetAllDirectors()
        {
            var directors = await _context.Directors.ToListAsync();
            return _mapper.Map<List<DirectorDTO>>(directors);
        }

        public async Task<DirectorDTO> GetDirectorById(int id)
        {
            var director = await _context.Directors.FirstOrDefaultAsync(x => x.DirectorId == id);
            return _mapper.Map<DirectorDTO>(director);
        }

        public async Task<DirectorDTO> CreateDirector(DirectorCreateDTO actor)
        {
            var director = _mapper.Map<Director>(actor);
            await _context.Directors.AddAsync(director);
            await _context.SaveChangesAsync();
            return _mapper.Map<DirectorDTO>(director);
        }

        public async Task<DirectorDTO> UpdateDirector(int id, DirectorCreateDTO actor)
        {
            var director = await _context.Directors.FirstOrDefaultAsync(x => x.DirectorId == id);
            if (director == null)
            {
                return null;
            }

            _mapper.Map(actor, director);
            await _context.SaveChangesAsync();
            return _mapper.Map<DirectorDTO>(director);
        }

        public async Task<DirectorDTO> DeleteDirector(int id)
        {
            var director = await _context.Directors.FirstOrDefaultAsync(x => x.DirectorId == id);
            if (director == null)
            {
                return null;
            }

            _context.Directors.Remove(director);
            await _context.SaveChangesAsync();
            return _mapper.Map<DirectorDTO>(director);
        }
    }
}