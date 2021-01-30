using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.ViewModels
{
    public class QuestionAddViewModel
    {
        public string AskedBy { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime AskedOn { get; set; }
        public int Category { get; set; }
    }
}
