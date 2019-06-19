using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace toDoApp.Models {
    [Table("Ranks")]
    public class Rank
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Name;
        public int Exp { get; set; }

        public User User { get; set; }
        public List<PrivilageRank> PrivilageRanks { get; set; }
    }
}
