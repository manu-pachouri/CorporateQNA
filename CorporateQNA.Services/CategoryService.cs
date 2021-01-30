using AutoMapper;
using CorporateQNA.Models.DbModels;
using CorporateQNA.Models.ViewModels;
using CorporateQNA.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services
{
    public class CategoryService :ICategoryService
    {
        public CategoryService(AutoMapper.IMapper mapper,IConfiguration configuration)
        {
            _db = new Database(configuration.GetConnectionString("DefaultConnection"),"System.Data.SqlClient");
            _mapper = mapper;
        }

        public Database _db { get; }
        public AutoMapper.IMapper _mapper { get; }

        public List<CategoryViewModel> GetCategories()
        {
            return _db.Fetch<CategoryViewModel>("Select * from Categories");
        }

        public void AddCategory(CategoryAddViewModel category)
        {
            var Categ = _mapper.Map<Category>(category);
            _db.Insert(Categ);

        }
    }
}
