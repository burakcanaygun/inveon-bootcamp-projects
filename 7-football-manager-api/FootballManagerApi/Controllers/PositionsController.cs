using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FootballManagerApi.Entities;
using FootballManagerApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FootballManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public PositionsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Positions
        [HttpGet]
        public async Task<IEnumerable<Position>> GetPositions()
        {
            return await _unitOfWork.PositionService.GetAllAsync();
        }

        // GET: api/Positions/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Position>> GetPosition(int id)
        {
            var position = await _unitOfWork.PositionService.GetAsync(id);

            if (position == null) return NotFound();

            return position;
        }

        // PUT: api/Positions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:int}")]
        public async Task<IActionResult> PutPosition(int id, Position position)
        {
            if (id != position.Id) return BadRequest();


            try
            {
                await _unitOfWork.PositionService.UpdateAsync(id, position);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PositionExists(id)) return NotFound();

                throw;
            }

            return NoContent();
        }

        // POST: api/Positions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Position>> PostPosition(Position position)
        {
            await _unitOfWork.PositionService.CreateAsync(position);
            return CreatedAtAction("GetPosition", new { id = position.Id }, position);
        }

        // DELETE: api/Positions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePosition(int id)
        {
            var position = await _unitOfWork.PositionService.GetAsync(id);
            if (position == null) return NotFound();

            await _unitOfWork.PositionService.DeleteAsync(id);

            return NoContent();
        }

        private bool PositionExists(int id)
        {
            return _unitOfWork.PositionService.GetAllAsync().Result.Any(e => e.Id == id);
        }
    }
}