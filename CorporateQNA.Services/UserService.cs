using CorporateQNA.Models.ViewModels;
using CorporateQNA.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using PetaPoco;
using System.Collections.Generic;

namespace CorporateQNA.Services
{
    public class UserService : IUserService
    {
        public UserService(IConfiguration configuration)
        {
            _db = new Database(configuration.GetConnectionString("DefaultConnection"), "System.Data.SqlClient");
        }

        public Database _db { get; }

        public List<UserDataViewModel> GetUsers()
        {
            var Result = _db.Fetch<UserDataViewModel>("Select * from UserCardView");
            return Result;
        }

        public UserDataViewModel GetUser(string id)
        {
            var Result = _db.SingleOrDefault<UserDataViewModel>("Select * from UserCardView where Id = @0", id);

            return Result;
        }
    }
}
