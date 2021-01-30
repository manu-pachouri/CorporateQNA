using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.DbModels
{
    [TableName("Categories")]
    [PrimaryKey("Id")]
    public class Category
    {
        [Column]
        public int Id { get; set; }
        [Column]
        public string Title { get; set; }
        [Column]
        public string Description { get; set; }
        [Column]
        public string AddedBy { get; set; }
        [Column]
        public DateTime AddedOn { get; set; }
    }
}
