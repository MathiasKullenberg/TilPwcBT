using ServerAndAdmin.Functions;

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models.AdminModels
{
    public class LogModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public ApiMessageType ErrorMessagetype { get; set; }
        public DateTime CreateDate { get; set; }
        public long UserId { get; set; }
        public string ErrorInformation { get; set; }
        public string ApiCallInformation { get; set; }
    }
}
