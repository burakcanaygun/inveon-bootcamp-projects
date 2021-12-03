using FootballManagerApi.Data;
using FootballManagerApi.ServiceAbstracts;
using FootballManagerApi.ServiceImplementations;
using FootballManagerApi.UnitOfWork;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

namespace FootballManagerApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<ITeamService, TeamService>();
            services.AddScoped<IFootballerService, FootballerService>();
            services.AddScoped<INationalTeamService, NationalTeamService>();
            services.AddScoped<IManagerService, ManagerService>();
            services.AddScoped<IPositionService, PositionService>();
            services.AddScoped<ITacticService, TacticService>();
            services.AddScoped<ICoachService, CoachService>();
            services.AddScoped<IManagementPositionService, ManagementPositionService>();

            services.AddScoped<IUnitOfWork, UnitOfWork.UnitOfWork>();

            //lifetimes -> Transient, Scoped, Singleton
            services.AddAutoMapper(typeof(Startup));
            services.AddDbContext<ApplicationDbContext>(x =>
            {
                x.EnableSensitiveDataLogging();
                x.UseSqlServer(Configuration.GetConnectionString("Default"));
            });
            services.AddControllers().AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "FootballManagerApi", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "FootballManagerApi v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}