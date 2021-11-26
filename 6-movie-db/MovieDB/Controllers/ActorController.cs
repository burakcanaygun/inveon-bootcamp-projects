using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieDB.DTOs.Actor;
using MovieDB.Interfaces;

namespace MovieDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorController : ControllerBase
    {
        private readonly IActorRepository _actorRepository;

        public ActorController(IActorRepository actorRepository)
        {
            _actorRepository = actorRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllActors()
        {
            var actors = await _actorRepository.GetAllActors();
            return Ok(actors);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetActorById(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid actor id");
            }

            var actor = await _actorRepository.GetActorById(id);
            return Ok(actor);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActor([FromBody] ActorCreateDTO actorCreate)
        {
            if (actorCreate == null)
            {
                return BadRequest("Actor object is null");
            }

            await _actorRepository.CreateActor(actorCreate);
            return Ok(actorCreate);
        }
        
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateActor(int id, [FromBody] ActorCreateDTO actorUpdate)
        {
            if (id <= 0 || actorUpdate == null)
            {
                return BadRequest("Invalid request");
            }

            await _actorRepository.UpdateActor(id, actorUpdate);
            return Ok(actorUpdate);
        }
        
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteActor(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid actor id");
            }

            var actor = await _actorRepository.GetActorById(id);
            if (actor == null)
            {
                return NotFound("Actor not found");
            }

            await _actorRepository.DeleteActor(id);
            return Ok(actor);
        }
    }
}