using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models
{
    public enum Position
    {
        CB, RB, LB, CDM, CM, COM, CF, LM, RM, RW, LW, AT, LA, RA
    }
    public enum MatchType
    {
        Training, Competition, Cup
    }
    public class UserMatchesModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string MatchName { get; set; }
        public int MatchLenght { get; set; }
        public int UserMatchLenght { get; set; }
        public bool Substitute { get; set; }
        public int Goals { get; set; }
        public int Assists { get; set; }
        public int HomeGoals { get; set; }
        public int AwayGoals { get; set; }
        public MatchType MatchType { get; set; }
        public string Explanation { get; set; }
        public string Reflection { get; set; }
        public Position Position { get; set; }
        public DateTime MatchDate { get; set; }
        public DateTime CreateDate { get; set; }

        public long UserId { get; set; }
    }
}
