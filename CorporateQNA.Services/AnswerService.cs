using CorporateQNA.Models;
using CorporateQNA.Models.CoreModels;
using CorporateQNA.Models.ViewModels;
using CorporateQNA.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using PetaPoco;
using System.Collections.Generic;

namespace CorporateQNA.Services
{
    public class AnswerService : IAnswerService
    {
        public AnswerService(IConfiguration configuration,
                                    AutoMapper.IMapper mapper)
        {
            _db = new Database(configuration.GetConnectionString("DefaultConnection"), "System.Data.SqlClient");
            _mapper = mapper;
        }

        private Database _db { get; }
        public AutoMapper.IMapper _mapper { get; }

        public void AddAnswer(Answer answer)
        {
            var Answer = _mapper.Map<CorporateQNA.Models.DbModels.Answer>(answer);
            _db.Insert(Answer);
        }

        public List<AnswerViewModel> GetAnswers(int qid,string userId)
        {
            var sql = Sql.Builder.Append(";EXEC GetAnswers @0,@1", userId,qid);

            var Result = _db.Fetch<AnswerViewModel>(sql);
            return Result;

        }

        public void PostActivity(AnswerActivity answerActivity)
        {
            if(answerActivity.Activity != Activity.UpVote)
            {
                var Act = _db.FirstOrDefault<AnswerActivity>("where AnswerId=@0 and ActivityBy = @1", answerActivity.AnswerId, answerActivity.ActivityBy);

                if (Act == null)
                {
                    _db.Insert(answerActivity);
                }
                else if(Act.Activity != answerActivity.Activity)
                {
                    Act.Activity = answerActivity.Activity;
                    _db.Save(_mapper.Map<CorporateQNA.Models.DbModels.AnswerActivity>(Act));
                }
            }
        }

        public void MarkAsBest(Answer answer)
        {
            var CurrAns = _db.FirstOrDefault<Answer>("where AnswerOf=@0 and MarkedAsBest=1", answer.AnswerOf);
            if (CurrAns!=null)
            {
                CurrAns.MarkedAsBest = false;
                _db.Save(CurrAns);
            }
            var newAns = _db.SingleOrDefault<Answer>("where Id=@0",answer.Id);
            newAns.MarkedAsBest = answer.MarkedAsBest;
            _db.Save(newAns);
        }
    }
}
