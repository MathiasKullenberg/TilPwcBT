using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models.Chat
{
    public enum Category
    {
        Trainer, Physical, Mental, All
    }
    public class ChatMessagesModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public DateTime CreateDate { get; set; }
        public string MessageText { get; set; }
        public Category Category { get; set; }
        public long EventId { get; set; }
        public long SenderId { get; set; }
        public long ReceiverId { get; set; }
    }
}
