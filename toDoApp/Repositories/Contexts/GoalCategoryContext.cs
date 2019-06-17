using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using toDoApp.Models;

namespace toDoApp.Repositories.Contexts
{
    public class GoalCategoryContext : DbContext
    {
        public DbSet<GoalCategory> GoalCategories { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<GoalCategory>().HasKey(gc => new { gc.GoalId, gc.CategoryId });
        }
    }
}
