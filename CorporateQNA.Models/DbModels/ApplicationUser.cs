using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Models.DbModels
{
    public class ApplicationUser:IdentityUser
    {
        public ApplicationUser():base() { }
        public ApplicationUser(string email) : base(email) { }

        public long UserId { get; set; }
    }
}
