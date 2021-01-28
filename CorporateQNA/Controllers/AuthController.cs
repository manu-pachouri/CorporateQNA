using CorporateQNA.Models;
using CorporateQNA.Models.ViewModels;
using CorporateQNA.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer.Controllers
{
    [Route("/")]
    public class AuthController : Controller
    {
        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        public AuthService _authService { get; }

        [HttpGet]
        [Route("/login")]
        public IActionResult Login(string returnUrl)
        {
            return View(new LoginViewModel { ReturnUrl = returnUrl});
        }

        [HttpPost]
        [Route("/login")]
        public async Task<IActionResult> Login(LoginViewModel Login)
        {
            if(!ModelState.IsValid)
            {
                return View(Login);
            }

            bool Succeeded = await _authService.Login(Login);
            
            if(Succeeded)
            {
                return Redirect(Login.ReturnUrl);
            }
            return View();
        }

        [HttpGet]
        [Route("/register")]
        public IActionResult Register(string returnUrl)
        {
            return View(new RegisterViewModel { ReturnUrl = returnUrl });
        }

        [HttpPost]
        [Route("/register")]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            string ReturnUrl = await _authService.Register(model);
            if (ReturnUrl != null)
            {
                return Redirect(ReturnUrl);
            }

            return NotFound();
        }


        [Route("/logout")]
        public async Task<IActionResult> logout()
        {
            await _authService.Logout();
            return View();
        }
    }
}
