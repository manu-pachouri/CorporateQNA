using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.ViewModels
{
    public class AnswerViewModel
    {
        public int Id { get; set; }
        public string  Description { get; set; }
        public string AnsweredBy { get; set; }
        public DateTime AnsweredOn { get; set; }
        public string ImageUrl { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
        public Activity Activity { get; set; }
    }
}
