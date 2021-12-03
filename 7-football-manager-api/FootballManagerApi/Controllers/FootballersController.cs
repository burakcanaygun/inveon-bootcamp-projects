using System.Collections.Generic;
using System.Threading.Tasks;
using FootballManagerApi.Entities;
using FootballManagerApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;

namespace FootballManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FootballersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public FootballersController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Footballers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Footballer>>> GetFootballers()
        {
            var footballer = await _unitOfWork.FootballerService.GetAllAsync();
            return Ok(footballer);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Footballer>> GetFootballer(int id)
        {
            var footballer = await _unitOfWork.FootballerService.GetAsync(id);
            return Ok(footballer);
        }

        // PUT: api/Footballers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:int}")]
        public async Task<IActionResult> PutFootballer(int id, Footballer footballer)
        {
            await _unitOfWork.FootballerService.UpdateAsync(id, footballer);
            return NoContent();
        }

        // POST: api/Footballers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Footballer>> PostFootballer(Footballer footballer)
        {
            var createdFootballer = await _unitOfWork.FootballerService.CreateAsync(footballer);
            return Ok(createdFootballer);
        }

        // DELETE: api/Footballers/5
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteFootballer(int id)
        {
            await _unitOfWork.FootballerService.DeleteAsync(id);
            return NoContent();
        }
    }
}