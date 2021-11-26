using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MovieDB.Data;
using MovieDB.DTOs.Writer;
using MovieDB.Interfaces;
using MovieDB.Models;

namespace MovieDB.Repositories
{
    public class WriterRepository: IWriterRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public WriterRepository(IMapper mapper, DataContext context)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<WriterDTO>> GetAllWriters()
        {
            var writers = await _context.Writers.ToListAsync();
            return _mapper.Map<List<WriterDTO>>(writers);
        }

        public async Task<WriterDTO> GetWriterById(int id)
        {
            var writer = await _context.Writers.FirstOrDefaultAsync(w => w.WriterId == id);
            return _mapper.Map<WriterDTO>(writer);
        }

        public async Task<WriterDTO> CreateWriter(WriterCreateDTO movie)
        {
            var writer = _mapper.Map<Writer>(movie);
            await _context.Writers.AddAsync(writer);
            await _context.SaveChangesAsync();
            return _mapper.Map<WriterDTO>(writer);
        }

        public async Task<WriterDTO> UpdateWriter(int id, WriterCreateDTO movie)
        {
            var writer = await _context.Writers.FirstOrDefaultAsync(w => w.WriterId == id);
            if (writer == null)
            {
                return null;
            }
            _mapper.Map(movie, writer);
            await _context.SaveChangesAsync();
            return _mapper.Map<WriterDTO>(writer);
        }

        public async Task<WriterDTO> DeleteWriter(int id)
        {
            var writer = await _context.Writers.FirstOrDefaultAsync(w => w.WriterId == id);
            if (writer == null)
            {
                return null;
            }
            _context.Writers.Remove(writer);
            await _context.SaveChangesAsync();
            return _mapper.Map<WriterDTO>(writer);
        }
    }
}