using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace toDoCharityApp.Models
{
    public class Goal
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "numeric(5, 2)")]
        public decimal Reward { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Column(TypeName = "numeric(5, 2)")]
        public decimal WinCharityPercent { get; set; }
        [Required]
        [Column(TypeName = "numeric(5, 2)")]
        public decimal LooseCharityPercent { get; set; }
        [Column(TypeName = "numeric(5, 2)")]
        public decimal ToDoCharityPercent { get; set; }

        public List<User> Users { get; set; }

        public int ToDoId { get; set; }
        public ToDo ToDo { get; set; }

        public List<GoalCategory> GoalCategories { get; set; }
    }
}
