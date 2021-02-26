using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerAndAdmin.Models.Nutrition
{
    public enum Category
    {
        Breakfast, Lunch, Dinner, Pregame, Postgame, Snacks, Sleep
    }
    public class NutritionModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public DateTime CreateDate { get; set; }
        public Category Category { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public string NutritionalValues { get; set; }
    }
}
