// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
using CorporateQNA.Models;
using CorporateQNA.Services;
using IdentityServerHost.Quickstart.UI;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace IdentityServer
{
    public class Startup
    {
        public Startup(IWebHostEnvironment environment, IConfiguration configuration)
        {
            Environment = environment;
            ConnectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public IWebHostEnvironment Environment { get; }
        public string ConnectionString { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<Context>(options => {
                options.UseSqlServer(ConnectionString,opt=>opt.MigrationsAssembly("CorporateQNA"));
            });

            services.AddTransient<AuthService>();

            services.AddIdentity<IdentityUser, IdentityRole>(opt =>
            {
                opt.Password.RequireDigit = false;
                opt.Password.RequireLowercase = false;
                opt.Password.RequiredUniqueChars = 0;
                opt.Password.RequireNonAlphanumeric = false;
                opt.Password.RequireUppercase = false;
                opt.Password.RequiredLength = 2;
            })
                .AddDefaultTokenProviders()
                .AddEntityFrameworkStores<Context>();

            var builder = services.AddIdentityServer()
                .AddInMemoryIdentityResources(Config.IdentityResources())
                .AddInMemoryApiScopes(Config.ApiScopes)
                .AddInMemoryClients(Config.Clients)
                .AddTestUsers(TestUsers.Users)
                .AddAspNetIdentity<IdentityUser>()
                .AddProfileService<ProfileService>();

            // not recommended for production - you need to store your key material somewhere secure
            builder.AddDeveloperSigningCredential();

            services.ConfigureApplicationCookie(config => {
                config.Cookie.Name = "Identity.Cookie";
                config.LoginPath = "/login";
                config.LogoutPath = "/logout";
            });

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app)
        {
            if (Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            // uncomment if you want to add MVC
            app.UseRouting();

            app.UseIdentityServer();

            // uncomment, if you want to add MVC
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
