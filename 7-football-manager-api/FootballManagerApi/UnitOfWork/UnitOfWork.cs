using System.Threading.Tasks;
using FootballManagerApi.Data;
using FootballManagerApi.ServiceAbstracts;

namespace FootballManagerApi.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _dbContext;

        public UnitOfWork(ITeamService teamService, IFootballerService footballerService, ICoachService coachService,
            IManagerService managerService, IManagementPositionService managementPositionService,
            INationalTeamService nationalTeamService, IPositionService positionService, ITacticService tacticService,
            ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            FootballerService = footballerService;
            TeamService = teamService;
            CoachService = coachService;
            ManagerService = managerService;
            ManagementPositionService = managementPositionService;
            NationalTeamService = nationalTeamService;
            PositionService = positionService;
            TacticService = tacticService;
        }

        public ITacticService TacticService { get; set; }
        public ITeamService TeamService { get; set; }
        public ICoachService CoachService { get; set; }
        public IFootballerService FootballerService { get; set; }
        public IManagerService ManagerService { get; set; }
        public IManagementPositionService ManagementPositionService { get; set; }
        public INationalTeamService NationalTeamService { get; set; }
        public IPositionService PositionService { get; set; }

        public async Task SaveChangesAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}