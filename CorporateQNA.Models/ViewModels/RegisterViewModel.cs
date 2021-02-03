using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CorporateQNA.Models.ViewModels
{
    public class RegisterViewModel
    { 
        [Required]
        public string FullName { get; set; }
        [Required]
        public string ImageUrl { get; set; }
        [Required]
        public string Designation { get; set; }
        [Required]
        public string Team { get; set; }
        [Required]
        public string Role { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
        public string ReturnUrl { get; set; }
    }
}
