using System.Collections.Generic;
using MovieDB.DTOs.Actor;
using MovieDB.DTOs.Director;
using MovieDB.DTOs.Writer;

namespace MovieDB.DTOs.Movie
{
    public class MovieCreateDTO
    {
        public string Title { get; set; }
        public int ReleaseYear { get; set; }
        public string Genre { get; set; }
        public int Rate { get; set; }
        public ICollection<ActorCreateDTO> Actors { get; set; }
        public ICollection<DirectorCreateDTO> Directors { get; set; }
        public ICollection<WriterCreateDTO> Writers { get; set; }
    }
}