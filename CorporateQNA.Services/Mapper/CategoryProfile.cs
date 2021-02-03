using AutoMapper;
using CorporateQNA.Models.CoreModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services.Mapper
{
    class CategoryProfile : Profile
    {
        public CategoryProfile()
        {
            CreateMap<Category, CorporateQNA.Models.DbModels.Category>();
        }
    }
}
