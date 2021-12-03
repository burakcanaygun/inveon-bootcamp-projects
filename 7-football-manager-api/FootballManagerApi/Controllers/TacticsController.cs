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
    public class TacticsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public TacticsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Tactics
        [HttpGet]
        public async Task<IEnumerable<Tactic>> GetTactics()
        {
            return await _unitOfWork.TacticService.GetAllAsync();
        }

        // GET: api/Tactics/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Tactic>> GetTactic(int id)
        {
            var tactic = await _unitOfWork.TacticService.GetAsync(id);

            return tactic;
        }

        // PUT: api/Tactics/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTactic(int id, Tactic tactic)
        {
            if (id != tactic.Id) return BadRequest();

            try
            {
                await _unitOfWork.TacticService.UpdateAsync(id, tactic);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TacticExists(id)) return NotFound();

                throw;
            }

            return NoContent();
        }

        // POST: api/Tactics
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tactic>> PostTactic(Tactic tactic)
        {
            await _unitOfWork.TacticService.CreateAsync(tactic);

            return CreatedAtAction("GetTactic", new { id = tactic.Id }, tactic);
        }

        // DELETE: api/Tactics/5
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteTactic(int id)
        {
            var tactic = await _unitOfWork.TacticService.GetAsync(id);

            if (tactic == null) return NotFound();

            await _unitOfWork.TacticService.DeleteAsync(id);


            return NoContent();
        }

        private bool TacticExists(int id)
        {
            return _unitOfWork.TacticService.GetAllAsync().Result.Any(e => e.Id == id);
        }
    }
}