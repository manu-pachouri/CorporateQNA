using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.CoreModels
{
    public class Answer
    {
        public int Id { get; set; }
        public int AnswerOf { get; set; }
        public string Description { get; set; }
        public DateTime AnsweredOn { get; set; }
        public long AnsweredBy { get; set; }
        public bool MarkedAsBest { get; set; }
    }
}
