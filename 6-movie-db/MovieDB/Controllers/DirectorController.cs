using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieDB.DTOs.Director;
using MovieDB.Interfaces;

namespace MovieDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorController : ControllerBase
    {
        private readonly IDirectorRepository _directorRepository;

        public DirectorController(IDirectorRepository directorRepository)
        {
            _directorRepository = directorRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetDirectors()
        {
            var directors = await _directorRepository.GetAllDirectors();
            return Ok(directors);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetDirector(int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            var director = await _directorRepository.GetDirectorById(id);

            if (director == null)
            {
                return NotFound("Director not found");
            }

            return Ok(director);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDirector([FromBody] DirectorCreateDTO director)
        {
            if (director == null)
            {
                return BadRequest();
            }

            await _directorRepository.CreateDirector(director);

            return Ok(director);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateDirector(int id, [FromBody] DirectorCreateDTO directorUpdate)
        {
            if (id <= 0 || directorUpdate == null)
            {
                return BadRequest();
            }
            
            await _directorRepository.UpdateDirector(id, directorUpdate);
            
            return Ok(directorUpdate);
        }
        
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteDirector(int id)
        {
            if (id <= 0)
            {
                return BadRequest();
            }

            await _directorRepository.DeleteDirector(id);

            return Ok();
        }
    }
}