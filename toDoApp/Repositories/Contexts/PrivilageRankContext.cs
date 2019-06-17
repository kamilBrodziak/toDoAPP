using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using toDoApp.Models;

namespace toDoApp.Repositories.Contexts {
    public class PrivilageRankContext : DbContext
    {
        public DbSet<PrivilageRank> PrivilageRanks { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<PrivilageRank>().HasKey(pr => new { pr.PrivilageId, pr.RankId });
        }
    }
}
