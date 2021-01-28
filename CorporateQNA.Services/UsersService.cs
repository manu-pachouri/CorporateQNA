using CorporateQNA.Models.ViewModels;
using Microsoft.Extensions.Configuration;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services
{
    public class UsersService
    {
        public UsersService(IConfiguration configuration)
        {
            _db = new Database(configuration.GetConnectionString("DefaultConnection"), "System.Data.SqlClient");
        }

        public Database _db { get; }

        public List<UserDataViewModel> GetUsers()
        {
            return _db.Fetch<UserDataViewModel>("SELECT * FROM [UserDataView]");
        }
    }
}
