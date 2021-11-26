using AutoMapper;
using MovieDB.DTOs.Actor;
using MovieDB.DTOs.Director;
using MovieDB.DTOs.Movie;
using MovieDB.DTOs.Writer;
using MovieDB.Models;

namespace MovieDB.Helpers
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<MovieDTO, Movie>().ReverseMap();
            CreateMap<MovieCreateDTO, Movie>();

            CreateMap<ActorDTO, Actor>().ReverseMap();
            CreateMap<ActorCreateDTO, Actor>();

            CreateMap<DirectorDTO, Director>().ReverseMap();
            CreateMap<DirectorCreateDTO, Director>();

            CreateMap<WriterDTO, Writer>().ReverseMap();
            CreateMap<WriterCreateDTO, Writer>();
        }
    }
}