using System;
using FootballManagerApi.EntityBases;

namespace FootballManagerApi.Entities
{
    public class Tactic : IEntity
    {
        public int Id { get; set; }
        public DateTime CreateDate { get; set; } = DateTime.Now;
        public DateTime UpdateDate { get; set; } = DateTime.Now;
    }
}