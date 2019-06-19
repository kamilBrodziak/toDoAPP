using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using toDoApp.Models;

namespace toDoApp.Repositories {
    public class ToDoAppContext : DbContext {
        public ToDoAppContext(DbContextOptions options) : base(options) { }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<CharityFundation> CharityFundations { get; set; }
        public DbSet<DonationHistory> DonationHistories { get; set; }
        public DbSet<GoalCategory> GoalCategories { get; set; }
        public DbSet<Goal> Goals { get; set; }
        public DbSet<Privilage> Privilages { get; set; }
        public DbSet<PrivilageRank> PrivilageRanks { get; set; }
        public DbSet<Rank> Ranks { get; set; }
        public DbSet<ToDo> ToDos { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            AccountCreating(modelBuilder);
            DonationHistoryCreating(modelBuilder);
            GoalCategoryCreating(modelBuilder);
            GoalCreating(modelBuilder);
            PrivilageRankCreating(modelBuilder);
            ToDoCreating(modelBuilder);
            //UserCreating(modelBuilder);
            RankCreating(modelBuilder);
        }

        private void AccountCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Account>().Property(a => a.MoneySent).HasDefaultValue(0.00);
            modelBuilder.Entity<Account>().Property(a => a.Exp).HasDefaultValue(0.00);
        }
        private void DonationHistoryCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<DonationHistory>().Property(d => d.Date).HasDefaultValue(DateTime.Now);
        }

        private void GoalCategoryCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<GoalCategory>().HasKey(gc => new { gc.GoalId, gc.CategoryId });
        }
        private void GoalCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Goal>().Property(g => g.LooseCharityPercent).HasDefaultValue(1.00);
            modelBuilder.Entity<Goal>().Property(g => g.WinCharityPercent).HasDefaultValue(0.00);
            modelBuilder.Entity<Goal>().Property(g => g.ToDoCharityPercent).HasDefaultValue(90.00);
        }

        private void PrivilageRankCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<PrivilageRank>().HasKey(pr => new { pr.PrivilageId, pr.RankId });
        }

        private void ToDoCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<ToDo>().Property(t => t.Completed).HasDefaultValue(false);
        }

        //private void UserCreating(ModelBuilder modelBuilder) {
        //    //modelBuilder.Entity<User>().Property(u => u.Rank).HasDefaultValue(0);
        //}
        private void RankCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Rank>().Property(r => r.Exp).HasDefaultValue(0);
        }
    }
}
