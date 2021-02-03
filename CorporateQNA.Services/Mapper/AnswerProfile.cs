using AutoMapper;
using CorporateQNA.Models.CoreModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services.Mapper
{
    class AnswerProfile : Profile
    {
        public AnswerProfile()
        {
            CreateMap<Answer, CorporateQNA.Models.DbModels.Answer>();
        }
    }
}
