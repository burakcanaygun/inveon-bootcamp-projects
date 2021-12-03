using System;
using System.Collections.Generic;
using FootballManagerApi.EntityBases;

namespace FootballManagerApi.Entities
{
    public class Footballer : Person, IEntity
    {
        public ICollection<Position> Positions { get; set; } = new List<Position>();
        public int Id { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now; 
        public DateTime UpdateDate { get; set; } = DateTime.Now;
    }
}