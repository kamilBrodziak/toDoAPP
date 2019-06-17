using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace toDoCharityApp.Models
{
    public class PrivilageRank
    {
        public int PrivilageId { get; set; }
        public Privilage Privilage { get; set; }

        public int RankId { get; set; }
        public Rank Rank { get; set; }
    }
}
