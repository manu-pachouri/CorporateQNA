using CorporateQNA.Models;
using CorporateQNA.Models.ViewModels;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using PetaPoco;

namespace CorporateQNA.Services
{
    public class AuthService
    {
        public AuthService(SignInManager<IdentityUser> signInManager,UserManager<IdentityUser> userManager,IConfiguration configuration)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _db = new Database(configuration.GetConnectionString("DefaultConnection"), "System.Data.SqlClient");
        }

        private SignInManager<IdentityUser> _signInManager { get; }
        private UserManager<IdentityUser> _userManager { get; }
        private Database _db { get; }


        public async Task<bool> Login(LoginViewModel Login)
        {
            var Result = await _signInManager.PasswordSignInAsync(Login.Email, Login.Password, false, false);
            return Result.Succeeded;
        }

        public async Task<string> Register(RegisterViewModel model)
        {
            var User = new IdentityUser(model.Email);
            var Result = await _userManager.CreateAsync(User, model.Password);

            var UserInfo = new UserInfo(User.Id, model);
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
