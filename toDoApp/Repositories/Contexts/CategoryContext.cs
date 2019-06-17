using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using toDoApp.Models;

namespace toDoApp.Repositories.Contexts {
    public class CategoryContext : DbContext
    {
        public DbSet<Category> Categories { get; set; } 
    }
}
