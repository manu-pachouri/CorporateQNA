using CorporateQNA.Models.ViewModels;
using CorporateQNA.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CorporateQNA.Controllers
{
    [Route("categories")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        private ICategoryService _categoryService { get; }

        public List<CategoryViewModel> GetCategories()
        {
            return _categoryService.GetCategories();
        }

        [Route("post")]
        public void PostCategory(CategoryAddViewModel category)
        {
            _categoryService.AddCategory(category);
        }
    }
}
