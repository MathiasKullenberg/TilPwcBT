using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models.AdminModels
{
    public enum AdminType
    {
        Super, Trainer, Physical, Mental, Other
    }
    public class AdminUserModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public int Salt { get; set; }
        public AdminType AdminType { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
