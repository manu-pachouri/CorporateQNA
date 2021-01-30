using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.ViewModels
{
    public class AnswerAddViewModel
    {
        public int AnswerOf { get; set; }
        public string Description { get; set; }
        public DateTime AnsweredOn { get; set; }
        public string AnsweredBy { get; set; }
    }
}
