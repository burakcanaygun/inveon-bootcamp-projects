using System.ComponentModel.DataAnnotations;

namespace MovieDB.Models
{
    public class Actor
    {
        public int ActorId { get; set; }
        [Required] public string Name { get; set; }
    }
}