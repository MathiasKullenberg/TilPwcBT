using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServerAndAdmin.Models
{
    public class UserDataModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public int Height { get; set; }
        public float Weight { get; set; }
        public int Age { get; set; }
        public int PersonalState { get; set; }
        public DateTime CreateDate { get; set; }

        public long UserId { get; set; }
    }
}
