using System;
using System.Collections.Generic;
using FootballManagerApi.EntityBases;

namespace FootballManagerApi.Entities
{
    public class Coach : Person, IEntity
    {
        public ICollection<Tactic> Tactics { get; set; } = new List<Tactic>();
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}