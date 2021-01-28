using CorporateQNA.Models.ViewModels;
using PetaPoco;

namespace CorporateQNA.Models
{
    [TableName("UsersInfo")]
    [PrimaryKey("UserId",AutoIncrement =false)]
    public class UserInfo
    {
        public UserInfo() { }
        public UserInfo(string userId, RegisterViewModel model)
        {
            this.UserId = userId;
            this.FullName = model.FullName;
            this.ImageUrl = model.ImageUrl;
            this.Designation = model.Designation;
            this.Team = model.Team;
            this.Role = model.Role;
            this.Location = model.Location;
        }
        [Column]
        public string UserId { get; set; }
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
