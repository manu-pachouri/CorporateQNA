using AutoMapper;
using CorporateQNA.Models.CoreModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services.Mapper
{
    class AnswerActivityProfile : Profile
    {
        public AnswerActivityProfile()
        {
            CreateMap<AnswerActivity, CorporateQNA.Models.DbModels.AnswerActivity>()
                .ForMember(m => m.Activity, opt => opt.MapFrom(src => (short)src.Activity))
                .ReverseMap();
        }
    }
}
