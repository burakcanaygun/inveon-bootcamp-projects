using System.Collections.Generic;
using System.Threading.Tasks;
using MovieDB.DTOs.Writer;

namespace MovieDB.Interfaces
{
    public interface IWriterRepository
    {
        Task<List<WriterDTO>> GetAllWriters();
        Task<WriterDTO> GetWriterById(int id);
        Task<WriterDTO> CreateWriter(WriterCreateDTO movie);
        Task<WriterDTO> UpdateWriter(int id, WriterCreateDTO movie);
        Task<WriterDTO> DeleteWriter(int id);
    }
}