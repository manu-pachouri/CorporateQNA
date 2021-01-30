using PetaPoco;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.DbModels
{
    [TableName("QuestionActivities")]
    [PrimaryKey("Id")]
    public class QuestionActivity
    {
        [Column]
        public int Id { get; set; }
        [Column]
        public int QuestionId { get; set; }
        [Column]
        public bool Viewed { get; set; }
        [Column]
        public int Activity { get; set; }
        [Column]
        public string ActivityBy { get; set; }
    }
}       
