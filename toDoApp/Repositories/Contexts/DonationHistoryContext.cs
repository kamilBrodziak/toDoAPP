using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using toDoCharityApp.Models;

namespace toDoCharityApp.Repositories.Contexts
{
    public class DonationHistoryContext : DbContext {
        public DbSet<DonationHistory> DonationHistories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<DonationHistory>().Property(d => d.Date).HasDefaultValue(DateTime.Now);
        }
    }
}
