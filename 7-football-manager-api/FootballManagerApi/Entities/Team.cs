using System;
using System.Collections.Generic;
using FootballManagerApi.EntityBases;

namespace FootballManagerApi.Entities
{
    public class Team : IEntity
    {
        public string Name { get; set; } = string.Empty;
        public int Year { get; set; }
        public ICollection<Footballer> Footballers { get; set; } = new List<Footballer>();
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}