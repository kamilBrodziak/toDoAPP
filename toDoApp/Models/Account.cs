using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace toDoApp.Models
{
    [Table("Accounts")]
    public class Account
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Column("Money_sent", TypeName = "numeric(10, 2)")]
        public decimal MoneySent { get; set; }
        [Column(TypeName = "numeric(10, 2)")]
        public decimal Exp { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

    }
}
