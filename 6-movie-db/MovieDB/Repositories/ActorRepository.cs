using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MovieDB.Data;
using MovieDB.DTOs.Actor;
using MovieDB.Interfaces;
using MovieDB.Models;

namespace MovieDB.Repositories
{
    public class ActorRepository : IActorRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ActorRepository(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<List<ActorDTO>> GetAllActors()
        {
            var actors = await _context.Actors.ToListAsync();
            return _mapper.Map<List<ActorDTO>>(actors);
        }

        public async Task<ActorDTO> GetActorById(int id)
        {
            var actor = await _context.Actors.FirstOrDefaultAsync(a => a.ActorId == id);
            return _mapper.Map<ActorDTO>(actor);
        }

        public async Task<ActorDTO> CreateActor(ActorCreateDTO actor)
        {
            var actorToCreate = _mapper.Map<Actor>(actor);
            await _context.Actors.AddAsync(actorToCreate);
            await _context.SaveChangesAsync();
            return _mapper.Map<ActorDTO>(actorToCreate);
        }

        public async Task<ActorDTO> UpdateActor(int id, ActorCreateDTO actor)
        {
            var actorToUpdate = await _context.Actors.FirstOrDefaultAsync(a => a.ActorId == id);
            if (actorToUpdate == null)
            {
                return null;
            }

            _mapper.Map(actor, actorToUpdate);
            await _context.SaveChangesAsync();
            return _mapper.Map<ActorDTO>(actorToUpdate);
        }

        public async Task<ActorDTO> DeleteActor(int id)
        {
            var actorToDelete = await _context.Actors.FirstOrDefaultAsync(a => a.ActorId == id);
            if (actorToDelete == null)
            {
                return null;
            }

            _context.Actors.Remove(actorToDelete);
            await _context.SaveChangesAsync();
            return _mapper.Map<ActorDTO>(actorToDelete);
        }
    }
}