using AutoMapper;
using CorporateQNA.Models.CoreModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services.Mapper
{
    class QuestionActivityProfile : Profile
    {
        public QuestionActivityProfile()
        {
            CreateMap<QuestionActivity, CorporateQNA.Models.DbModels.AnswerActivity>()
                .ForMember(m => m.Activity, opt => opt.MapFrom(s => (short)s.Activity))
                .ReverseMap();
        }
    }
}
