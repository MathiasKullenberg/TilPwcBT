using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models
{
    public enum Theme
    {
        Dark, Light
    }
    public enum Language
    {
        Danish, English
    }
    public class UserConfigModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public Theme Theme { get; set; }
        public Language Language { get; set; }
        public DateTime CreateDate { get; set; }

        public long UserId { get; set; }
    }
}
