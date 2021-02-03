using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.CoreModels
{
    public class UserInfo
    {
        public long Id { get; set; }
        public string FullName { get; set; }
        public string ImageUrl { get; set; }
        public string Designation { get; set; }
        public string Team { get; set; }
        public string Role { get; set; }
        public string Location { get; set; }
    }
}
