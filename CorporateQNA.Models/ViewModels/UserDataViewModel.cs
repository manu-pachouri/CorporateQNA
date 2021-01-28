using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.ViewModels
{
    public class UserDataViewModel
    {
        public string FullName { get; set; }
        public string Designation { get; set; }
        public string Team { get; set; }
        public string Role { get; set; }
        public string Location { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
        public int QuestionsAsked { get; set; }
        public int QuestionsAnswered { get; set; }
        public int QuestionsSolved { get; set; }
    }
}
