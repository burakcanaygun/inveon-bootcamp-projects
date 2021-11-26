using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieDB.DTOs.Writer;
using MovieDB.Interfaces;

namespace MovieDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WriterController : ControllerBase
    {
        private readonly IWriterRepository _writerRepository;

        public WriterController(IWriterRepository writerRepository)
        {
            _writerRepository = writerRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetWriters()
        {
            var writers = await _writerRepository.GetAllWriters();
            return Ok(writers);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetWriter(int id)
        {
            var writer = await _writerRepository.GetWriterById(id);
            return Ok(writer);
        }

        [HttpPost]
        public async Task<IActionResult> AddWriter([FromBody] WriterCreateDTO writer)
        {
            if (writer == null)
            {
                return BadRequest();
            }

            await _writerRepository.CreateWriter(writer);
            return Ok(writer);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateWriter(int id, [FromBody] WriterCreateDTO writerUpdate)
        {
            if (writerUpdate == null)
            {
                return BadRequest();
            }

            var writerToUpdate = await _writerRepository.UpdateWriter(id, writerUpdate);
            return Ok(writerToUpdate);
        }
        
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteWriter(int id)
        {
            var writerToDelete = await _writerRepository.DeleteWriter(id);
            return Ok(writerToDelete);
        }
    }
}