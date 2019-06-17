using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace toDoApp.Models {
    [Table("Privilage_Rank")]
    public class PrivilageRank
    {
        public int PrivilageId { get; set; }
        public Privilage Privilage { get; set; }

        public int RankId { get; set; }
        public Rank Rank { get; set; }
    }
}
