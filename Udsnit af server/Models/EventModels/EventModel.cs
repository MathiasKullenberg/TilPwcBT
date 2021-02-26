using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models.EventModels
{
    public enum Type
    {
        Physical, Mental, Football, All
    }
    public class EventModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public Type Type { get; set; }
        public DateTime CreateDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string VideoPath { get; set; }
        public string ImagePath { get; set; }
        public string Category { get; set; }
        public TimeSpan Duration {get; set;}
    }
}
