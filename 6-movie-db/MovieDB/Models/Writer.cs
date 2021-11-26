using System.ComponentModel.DataAnnotations;

namespace MovieDB.Models
{
    public class Writer
    {
        public int WriterId { get; set; }
        [Required] public string Name { get; set; }
    }
}