using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using PetaPoco;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using CorporateQNA.Models;
using IdentityModel;

namespace CorporateQNA.Services
{
    public class ProfileService : IProfileService
    {
        private readonly UserManager<IdentityUser> _userManager;

        public Database _db { get; }

        public ProfileService(UserManager<IdentityUser> userManager,IConfiguration configuration)
        {
            _userManager = userManager;
            _db = new Database(configuration.GetConnectionString("DefaultConnection"),"System.Data.SqlClient");
        }

        public Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var User = _userManager.GetUserAsync(context.Subject).Result;

            var Info = _db.FirstOrDefault<UserInfo>("where UserId = @0",User.Id);
            
            var Claims = new List<Claim>()
            {
                new Claim(JwtClaimTypes.Email,User.UserName),
                new Claim(JwtClaimTypes.Id,User.Id),
                new Claim(JwtClaimTypes.Name,Info.FullName),
                new Claim(JwtClaimTypes.Picture,Info.ImageUrl),
            };

            context.IssuedClaims.AddRange(Claims);
            
            return Task.FromResult(0);
        }

        public Task IsActiveAsync(IsActiveContext context)
        {
            var user = _userManager.GetUserAsync(context.Subject).Result;
            context.IsActive = user != null;
            return Task.FromResult(0);
        }
    }
}
