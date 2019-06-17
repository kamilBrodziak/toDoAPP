using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace toDoCharityApp.Models
{
    public class GoalCategory
    {
        public int GoalId { get; set; }
        public Goal Goal { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
