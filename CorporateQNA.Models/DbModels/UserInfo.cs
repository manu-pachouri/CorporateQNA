using CorporateQNA.Models.ViewModels;
using PetaPoco;

namespace CorporateQNA.Models.DbModels
{
    [TableName("UsersInfo")]
    [PrimaryKey("UserId",AutoIncrement =false)]
    public class UserInfo
    {
        [Column]
        public long Id { get; set; }
        [Column]
        public string FullName { get; set; }
        [Column]
        public string ImageUrl { get; set; }
        [Column]
        public string Designation { get; set; }
        [Column]
        public string Team { get; set; }
        [Column]
        public string Role { get; set; }
        [Column]
        public string Location { get; set; }
    }
}
