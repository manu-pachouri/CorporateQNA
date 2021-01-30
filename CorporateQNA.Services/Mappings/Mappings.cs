using AutoMapper;
using CorporateQNA.Models.DbModels;
using CorporateQNA.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services.Mappings
{
    class Mappings : Profile
    {
        public Mappings()
        {
            CreateMap<Question,QuestionAddViewModel>();
            CreateMap<QuestionAddViewModel, Question>();
            CreateMap<CategoryAddViewModel, Category>();
            CreateMap<AnswerAddViewModel, Answer>();
        }
    }
}
