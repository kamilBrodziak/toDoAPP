using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace toDoApp.Models
{
    [Table("Charity_fundations")]
    public class CharityFundation
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string AccountNumber { get; set; }

        public List<DonationHistory> DonationHistories { get; set; }
    }
}
