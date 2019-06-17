using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using toDoCharityApp.Models;

namespace toDoCharityApp.Repositories.Contexts
{
    public class ToDoContext : DbContext
    {
        public DbSet<ToDo> ToDos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<ToDo>().Property(t => t.Completed).HasDefaultValue(false);
        }
    }
}
