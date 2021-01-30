using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.ViewModels
{
    public class CategoryAddViewModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string AddedBy { get; set; }
        public DateTime AddedOn { get; set; }
    }
}
