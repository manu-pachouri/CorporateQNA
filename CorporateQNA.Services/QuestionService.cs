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
    public class QuestionService : IQuestionService
    {
        public QuestionService(IConfiguration configuration,
                                AutoMapper.IMapper mapper)
        {
            _db = new Database(configuration.GetConnectionString("DefaultConnection"),"System.Data.SqlClient");
            _mapper = mapper;
        }

        private Database _db { get; }
        private AutoMapper.IMapper _mapper { get; }

        public void AddQuestion(QuestionAddViewModel question)
        {
            var Question = _mapper.Map<Question>(question);
            _db.Insert(Question);
        }

        public List<QuestionViewModel> GetQuestions()
        {
            var Result = _db.Fetch<QuestionViewModel>("select * from QuestionCardView");
            return Result;
        }

        public void AddViewActivity(QuestionActivity questionActivity)
        {
            var Exists = _db.Exists<QuestionActivity>
                ("where QuestionId=@0 and ActivityBy=@1",
                questionActivity.QuestionId, questionActivity.ActivityBy);

            if (!Exists)
            {
                _db.Insert(questionActivity);
            }
        }

        public void UpVote(QuestionActivity activity)
        {
            
        }
    }
}
