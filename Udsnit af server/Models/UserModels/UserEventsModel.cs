using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models
{
    public enum State
    {
        Completed, Failed, Pending
    }
    public class UserEventsModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public DateTime CreateDate { get; set; }
        public long EventId { get; set; }
        public long UserId { get; set; }
        public State State { get; set; }
        public DateTime ExpiryDate { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }


    }
}
