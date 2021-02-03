using AutoMapper;
using CorporateQNA.Models.CoreModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services.Mapper
{
    class UserInfoProfile : Profile
    {
        public UserInfoProfile()
        {
            CreateMap<UserInfo, CorporateQNA.Models.DbModels.UserInfo>();
        }
    }
}
