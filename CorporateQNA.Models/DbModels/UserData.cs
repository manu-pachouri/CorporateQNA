using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.DbModels
{
    [TableName("UsersData")]
    [PrimaryKey("Id", AutoIncrement = false)]
    public class UserData
    {
        [Column]
        public string Id { get; set; }
        [Column]
        public int Likes { get; set; }
        [Column]
        public int Dislikes { get; set; }
        [Column]
        public int QuestionsAsked { get; set; }
        [Column]
        public int QuestionsAnswered { get; set; }
        [Column]
        public int QuestionsSolved { get; set; }
    }
}
