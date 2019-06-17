using Microsoft.EntityFrameworkCore;
using toDoCharityApp.Models;

namespace toDoCharityApp.Repositories.Contexts {

    public class AccountContext : DbContext {
        public DbSet<Account> Accounts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Account>().Property(a => a.Balance).HasDefaultValue(0.00);
            modelBuilder.Entity<Account>().Property(a => a.Debt).HasDefaultValue(0.00);
        }
    }
}
