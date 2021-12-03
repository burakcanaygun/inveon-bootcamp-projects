using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FootballManagerApi.Entities;
using FootballManagerApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

namespace FootballManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ManagersController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Managers
        [HttpGet]
        public async Task<IEnumerable<Manager>> GetManagers()
        {
            return await _unitOfWork.ManagerService.GetAllAsync();
        }

        // GET: api/Managers/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Manager>> GetManager(int id)
        {
            var manager = await _unitOfWork.ManagerService.GetAsync(id);

            if (manager == null) return NotFound();

            return manager;
        }

        // PUT: api/Managers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:int}")]
        public async Task<IActionResult> PutManager(int id, Manager manager)
        {
            await _unitOfWork.ManagerService.UpdateAsync(id, manager);
            return NoContent();
        }

        // POST: api/Managers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Manager>> PostManager(Manager manager)
        {
            await _unitOfWork.ManagerService.CreateAsync(manager);

            return CreatedAtAction("GetManager", new { id = manager.Id }, manager);
        }

        // DELETE: api/Managers/5
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteManager(int id)
        {
            await _unitOfWork.ManagerService.DeleteAsync(id);

            return NoContent();
        }

        private bool ManagerExists(int id)
        {
            return _unitOfWork.ManagerService.GetAllAsync().Result.Any(e => e.Id == id);
        }
    }
}