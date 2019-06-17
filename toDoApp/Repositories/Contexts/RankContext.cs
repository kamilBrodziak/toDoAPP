using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using toDoApp.Models;

namespace toDoApp.Repositories.Contexts {
    public class RankContext : DbContext
    {
        public DbSet<Rank> Ranks { get; set; }
    }
}
