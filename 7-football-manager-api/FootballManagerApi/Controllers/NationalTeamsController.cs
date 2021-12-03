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
    public class NationalTeamsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public NationalTeamsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/NationalTeams
        [HttpGet]
        public async Task<IEnumerable<NationalTeam>> GetNationalTeams()
        {
            return await _unitOfWork.NationalTeamService.GetAllAsync();
        }

        // GET: api/NationalTeams/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<NationalTeam>> GetNationalTeam(int id)
        {
            var nationalTeam = await _unitOfWork.NationalTeamService.GetAsync(id);

            if (nationalTeam == null) return NotFound();

            return nationalTeam;
        }

        // PUT: api/NationalTeams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:int}")]
        public async Task<IActionResult> PutNationalTeam(int id, NationalTeam nationalTeam)
        {
            if (id != nationalTeam.Id) return BadRequest();

            await _unitOfWork.NationalTeamService.UpdateAsync(id, nationalTeam);

            return NoContent();
        }

        // POST: api/NationalTeams
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<NationalTeam>> PostNationalTeam(NationalTeam nationalTeam)
        {
            await _unitOfWork.NationalTeamService.CreateAsync(nationalTeam);

            return CreatedAtAction("GetNationalTeam", new { id = nationalTeam.Id }, nationalTeam);
        }

        // DELETE: api/NationalTeams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNationalTeam(int id)
        {
            if (NationalTeamExists(id))
            {
                await _unitOfWork.NationalTeamService.DeleteAsync(id);
                return NoContent();
            }

            return NotFound();
        }

        private bool NationalTeamExists(int id)
        {
            return _unitOfWork.NationalTeamService.GetAllAsync().Result.Any(e => e.Id == id);
        }
    }
}