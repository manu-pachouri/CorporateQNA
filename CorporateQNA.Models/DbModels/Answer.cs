using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.DbModels
{
    [TableName("Answers")]
    [PrimaryKey("Id")]
    public class Answer
    {
        [Column]
        public int Id { get; set; }
        [Column]
        public int AnswerOf { get; set; }
        [Column]
        public string Description { get; set; }
        [Column]
        public DateTime AnsweredOn { get; set; }
        [Column]
        public string AnsweredBy { get; set; }
    }
}
