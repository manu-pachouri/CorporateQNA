using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.DbModels
{
    [TableName("AnswerActivities")]
    [PrimaryKey("Id")]
    public class AnswerActivity
    {
        [Column]
        public int Id { get; set; }
        [Column]
        public int AnswerId { get; set; }
        [Column]
        public short Activity { get; set; }
        [Column]
        public long ActivityBy { get; set; }
    }
}
