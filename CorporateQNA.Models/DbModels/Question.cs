using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.DbModels
{
    [TableName("Questions")]
    [PrimaryKey("Id")]
    public class Question
    {
        [Column]
        public int Id { get; set; }
        [Column]
        public string AskedBy{ get; set; }
        [Column]
        public string Title { get; set; }
        [Column]
        public string Description { get; set; }
        [Column]
        public DateTime AskedOn { get; set; }
        [Column]
        public int Category { get; set; }
    }
}
