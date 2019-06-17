using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using toDoApp.Models;

namespace toDoApp.Repositories.Contexts {
    public class GoalContext : DbContext
    {
        public DbSet<Goal> Goals { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Goal>().Property(g => g.LooseCharityPercent).HasDefaultValue(1.00);
            modelBuilder.Entity<Goal>().Property(g => g.WinCharityPercent).HasDefaultValue(0.00);
            modelBuilder.Entity<Goal>().Property(g => g.ToDoCharityPercent).HasDefaultValue(90.00);

        }
    }
}
