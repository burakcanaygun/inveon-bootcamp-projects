using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Entities;
using FootballManagerApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FootballManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagementPositionsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ManagementPositionsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/ManagementPositions
        [HttpGet]
        public async Task<IEnumerable<ManagementPosition>> GetManagementPositions()
        {
            return await _unitOfWork.ManagementPositionService.GetAllAsync();
        }

        // GET: api/ManagementPositions/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<ManagementPosition>> GetManagementPosition(int id)
        {
            var managementPosition = await _unitOfWork.ManagementPositionService.GetAsync(id);

            if (managementPosition == null) return NotFound();

            return managementPosition;
        }

        // PUT: api/ManagementPositions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:int}")]
        public async Task<IActionResult> PutManagementPosition(int id, ManagementPosition managementPosition)
        {
            if (id != managementPosition.Id) return BadRequest();

            try
            {
                await _unitOfWork.ManagementPositionService.UpdateAsync(id, managementPosition);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ManagementPositionExists(id)) return NotFound();

                throw;
            }

            return NoContent();
        }

        // POST: api/ManagementPositions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ManagementPosition>> PostManagementPosition(
            ManagementPosition managementPosition)
        {
            await _unitOfWork.ManagementPositionService.CreateAsync(managementPosition);

            return CreatedAtAction("GetManagementPosition", new { id = managementPosition.Id }, managementPosition);
        }

        // DELETE: api/ManagementPositions/5
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteManagementPosition(int id)
        {
            var managementPosition = await _unitOfWork.ManagementPositionService.GetAsync(id);
            if (managementPosition == null) return NotFound();

            await _unitOfWork.ManagementPositionService.DeleteAsync(id);

            return NoContent();
        }

        private bool ManagementPositionExists(int id)
        {
            return _unitOfWork.ManagementPositionService.GetAsync(id) != null;
        }
    }
}