using System;
using FootballManagerApi.EntityBases;

namespace FootballManagerApi.Entities
{
    public class NationalTeam : Team, IEntity
    {
        public new int Id { get; set; }
        public new DateTime CreateDate { get; set; }
        public new DateTime UpdateDate { get; set; }
    }
}