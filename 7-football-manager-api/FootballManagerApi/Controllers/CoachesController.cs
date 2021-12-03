using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Entities;
using FootballManagerApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

namespace FootballManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoachesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CoachesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        // GET: api/Coaches
        [HttpGet]
        public async Task<IEnumerable<Coach>> GetCoaches()
        {
            return await _unitOfWork.CoachService.GetAllAsync();
        }

        // GET: api/Coaches/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Coach>> GetCoach(int id)
        {
            var coach = await _unitOfWork.CoachService.GetAsync(id);

            if (coach == null) return NotFound();

            return Ok(coach);
        }

        // PUT: api/Coaches/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:int}")]
        public async Task<IActionResult> PutCoach(int id, Coach coach)
        {
            if (id != coach.Id) return BadRequest();

            await _unitOfWork.CoachService.UpdateAsync(id, coach);

            return NoContent();
        }

        // POST: api/Coaches
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Coach>> PostCoach(Coach coach)
        {
            await _unitOfWork.CoachService.CreateAsync(coach);

            return CreatedAtAction("GetCoach", new { id = coach.Id }, coach);
        }

        // DELETE: api/Coaches/5
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteCoach(int id)
        {
            await _unitOfWork.CoachService.DeleteAsync(id);
            return NoContent();
        }
    }
}