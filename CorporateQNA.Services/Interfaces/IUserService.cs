using CorporateQNA.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services.Interfaces
{
    public interface IUserService
    {
        public List<UserDataViewModel> GetUsers();
        public UserDataViewModel GetUser(string id);
    }
}
