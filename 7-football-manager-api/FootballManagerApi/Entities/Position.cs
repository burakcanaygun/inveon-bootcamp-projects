using System;
using System.Collections.Generic;
using FootballManagerApi.EntityBases;

namespace FootballManagerApi.Entities
{
    public class Position : IEntity
    {
        public string Name { get; set; } = string.Empty;
        public ICollection<Footballer> Footballers { get; set; } = new List<Footballer>();
        public int Id { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
        public DateTime UpdateDate { get; set; } = DateTime.Now;
    }
}