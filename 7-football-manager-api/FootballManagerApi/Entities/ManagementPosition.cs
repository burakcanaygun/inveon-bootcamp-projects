using System;
using FootballManagerApi.EntityBases;

namespace FootballManagerApi.Entities
{
    public class ManagementPosition : IEntity
    {
        public string Name { get; set; } = string.Empty;
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}