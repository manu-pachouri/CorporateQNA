﻿using CorporateQNA.Models;
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

        public void AddAnswer(AnswerAddViewModel answer)
        {
            var Answer = _mapper.Map<Answer>(answer);
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
            if(answerActivity.Activity != (int)Activity.UpVote)
            {
                var Act = _db.FirstOrDefault<AnswerActivity>("where AnswerId=@0 and ActivityBy = @1", answerActivity.AnswerId, answerActivity.ActivityBy);

                if (Act == null)
                {
                    _db.Insert(answerActivity);
                }
                else if(Act.Activity != answerActivity.Activity)
                {
                    Act.Activity = answerActivity.Activity;
                    _db.Save(Act);
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
