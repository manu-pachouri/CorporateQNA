// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System.Collections.Generic;

namespace IdentityServer
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> IdentityResources(){
            var Resource = new IdentityResource("customClaims", "customClaims",new[] { 
                      JwtClaimTypes.Id,
                      JwtClaimTypes.Name,
                      JwtClaimTypes.Picture,
                      JwtClaimTypes.Email
            });

            return new IdentityResource[]
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                Resource
            };

        }

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
                new ApiScope("api","MyApi")
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                new Client
                {
                    ClientId = "js",
                    ClientName = "JavaScript Client",
                    AllowedGrantTypes = GrantTypes.Code,
                    RequireClientSecret = false,

                    RedirectUris =           { "http://localhost:4200" },
                    PostLogoutRedirectUris = { "http://localhost:4200" },
                    AllowedCorsOrigins =     { "http://localhost:4200" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        JwtClaimTypes.Id,
                        JwtClaimTypes.Name,
                        JwtClaimTypes.Picture,
                        JwtClaimTypes.Email,
                        "api"
                    },

                    RefreshTokenExpiration = TokenExpiration.Sliding

                },
            };
    }
}