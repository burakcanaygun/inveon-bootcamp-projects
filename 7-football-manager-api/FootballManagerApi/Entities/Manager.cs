using System;
using FootballManagerApi.EntityBases;

namespace FootballManagerApi.Entities
{
    public class Manager : Person, IEntity
    {
        public ManagementPosition ManagementPosition { get; set; } = new();
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}