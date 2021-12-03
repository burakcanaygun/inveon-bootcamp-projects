using System;
using FootballManagerApi.Entities;

namespace FootballManagerApi.EntityBases
{
    public class Person
    {
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public Team Team { get; set; } = new();
        public NationalTeam NationalTeam { get; set; } = new();
    }
}