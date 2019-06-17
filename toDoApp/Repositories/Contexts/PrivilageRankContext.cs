using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using toDoCharityApp.Models;

namespace toDoCharityApp.Repositories.Contexts
{
    public class PrivilageRankContext : DbContext
    {
        public DbSet<PrivilageRank> PrivilageRanks { get; set; }
    }
}
