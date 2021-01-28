using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CorporateQNA.Models.ViewModels;
using CorporateQNA.Services;

namespace CorporateQNA.Controllers
{
    [ApiController]
    [Route("/users")]
    public class UsersControllers : ControllerBase
    {
        public UsersControllers(UsersService usersService)
        {
            _usersService = usersService;
        }

        public UsersService _usersService { get; }

        public List<UserDataViewModel> GetUsers()
        {
            return _usersService.GetUsers();
        }
    }
}
