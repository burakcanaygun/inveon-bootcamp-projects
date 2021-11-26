using System.Collections.Generic;
using MovieDB.DTOs.Actor;
using MovieDB.DTOs.Director;
using MovieDB.DTOs.Writer;

namespace MovieDB.DTOs.Movie
{
    public class MovieDTO
    {
        public int MovieId { get; set; }
        public string Title { get; set; }
        public int ReleaseYear { get; set; }
        public string Genre { get; set; }
        public int Rate { get; set; }
        public ICollection<ActorDTO> Actors { get; set; }
        public ICollection<DirectorDTO> Directors { get; set; }
        public ICollection<WriterDTO> Writers { get; set; }
    }
}