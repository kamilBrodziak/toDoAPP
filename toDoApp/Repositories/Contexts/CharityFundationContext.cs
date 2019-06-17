using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace toDoCharityApp.Repositories.Contexts
{
    public class CharityFundationContext : DbContext
    {
        public DbSet<Models.CharityFundation> CharityFundations { get; set; }
    }
}
