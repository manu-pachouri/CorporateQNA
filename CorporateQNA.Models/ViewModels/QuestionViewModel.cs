using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.ViewModels
{
    public class QuestionViewModel
    {
        public int Id { get; set; }
        public string AskedBy { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Views { get; set; }
        public int UpVotes { get; set; }
        public int AnswersCount { get; set; }
        public DateTime AskedOn { get; set; }
    }
}
