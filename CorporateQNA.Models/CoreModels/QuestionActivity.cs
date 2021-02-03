using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.CoreModels
{
    public class QuestionActivity
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public bool Viewed { get; set; }
        public Activity Activity { get; set; }
        public long ActivityBy { get; set; }
    }
}
