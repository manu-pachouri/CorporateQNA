using CorporateQNA.Models.CoreModels;
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
            _db = new Database(configuration.GetConnectionString("DefaultConnection"), "System.Data.SqlClient");
            _mapper = mapper;
        }

        private Database _db { get; }
        private AutoMapper.IMapper _mapper { get; }

        public void AddQuestion(Question question)
        {
            var Question = _mapper.Map<CorporateQNA.Models.DbModels.Question>(question);
            _db.Insert(Question);
        }

        public List<QuestionViewModel> GetQuestions(long userId)
        {
            var Result = new List<QuestionViewModel>();
            Result = _db.Fetch<QuestionViewModel>(";Exec GetQuestions @0", userId);

            return Result;
        }

        public void AddViewActivity(QuestionActivity questionActivity)
        {
            var Act = _db.SingleOrDefault<CorporateQNA.Models.DbModels.QuestionActivity>
                ("where QuestionId=@0 and ActivityBy=@1",
                questionActivity.QuestionId, questionActivity.ActivityBy);

            if (Act == null)
            {
                _db.Insert(_mapper.Map<CorporateQNA.Models.DbModels.QuestionActivity>(questionActivity));
            }
            else
            {
                Act.Viewed = questionActivity.Viewed;
                _db.Save(Act);
            }
        }


        public void Upvote(QuestionActivity activity)
        {
            var Act = _db.SingleOrDefault<CorporateQNA.Models.DbModels.QuestionActivity>("where ActivityBy=@0 and QuestionId=@1", activity.ActivityBy, activity.QuestionId);

            if (Act != null)
            {
                Act.Activity = (short)activity.Activity;
                _db.Save(Act);
            }
            else
            {
                _db.Insert(_mapper.Map<CorporateQNA.Models.DbModels.QuestionActivity>(activity));
            }
        }
    }
}
