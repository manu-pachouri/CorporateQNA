using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CorporateQNA.Models.ViewModels;
using CorporateQNA.Services;
using CorporateQNA.Services.Interfaces;

namespace CorporateQNA.Controllers
{
    [ApiController]
    [Route("users")]
    public class UsersControllers : ControllerBase
    {
        public UsersControllers(IUserService usersService)
        {
            _usersService = usersService;
        }

        public IUserService _usersService { get; }
        
        [Route("")]
        public List<UserDataViewModel> GetUsers()
        {
            return _usersService.GetUsers();
        }

        [Route("{id}")]
        public UserDataViewModel GetUser(string id)
        {
            return _usersService.GetUser(id);
        }
    }
}
