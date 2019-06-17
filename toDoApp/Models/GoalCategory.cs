using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace toDoApp.Models {
    [Table("Goal_Category")]
    public class GoalCategory
    {
        public int GoalId { get; set; }
        public Goal Goal { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
