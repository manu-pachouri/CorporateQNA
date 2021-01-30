using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.ViewModels
{
    public class CategoryViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int TotalTags { get; set; }
        public int WeekTags { get; set; }
        public int MonthTags { get; set; }
    }
}
