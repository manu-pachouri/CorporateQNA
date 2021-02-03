using CorporateQNA.Models;
using CorporateQNA.Models.ViewModels;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using PetaPoco;
using CorporateQNA.Models.DbModels;

namespace CorporateQNA.Services
{
    public class AuthService
    {
        public AuthService(SignInManager<ApplicationUser> signInManager,
            UserManager<ApplicationUser> userManager,
            IConfiguration configuration)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _db = new Database(configuration.GetConnectionString("DefaultConnection"), "System.Data.SqlClient");
        }

        private SignInManager<ApplicationUser> _signInManager { get; }
        private UserManager<ApplicationUser> _userManager { get; }
        private Database _db { get; }


        public async Task<bool> Login(LoginViewModel Login)
        {
            var Result = await _signInManager.PasswordSignInAsync(Login.Email, Login.Password, false, false);
            return Result.Succeeded;
        }

        public async Task<string> Register(RegisterViewModel model)
        {
            var User = new ApplicationUser(model.Email);
            var Result = await _userManager.CreateAsync(User, model.Password);

            var UserInfo = new UserInfo() { 
                Id = User.UserId,
                FullName = model.FullName,
                ImageUrl = model.ImageUrl,
                Designation = model.Designation,
                Location = model.Location,
                Role = model.Role,
                Team = model.Team
            };
            _db.Insert(UserInfo);

            if (Result.Succeeded)
            {
                await _signInManager.SignInAsync(User, false);
                return model.ReturnUrl;
            }

            return null;
        }

        public async Task Logout()
        {
            await _signInManager.SignOutAsync();
        }
    }
}
