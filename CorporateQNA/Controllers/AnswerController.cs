using CorporateQNA.Models.DbModels;
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
    [Route("answers")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        public AnswerController(IAnswerService answerService) {
            _answerService = answerService;
        }

        private IAnswerService _answerService { get; }

        [Route("get/{qid}/{userId}")]
        public List<AnswerViewModel> GetAnswers(int qid,string userId)
        {
            return _answerService.GetAnswers(qid,userId);
        }

        [Route("post")]
        public void PostAnswer(AnswerAddViewModel answer)
        {
            _answerService.AddAnswer(answer);
        }

        [Route("activity")]
        public void PostActivity(AnswerActivity answerActivity)
        {
            _answerService.PostActivity(answerActivity);
        }

        [Route("markasbest")]
        public void MarkAsBest(Answer answer)
        {
            _answerService.MarkAsBest(answer);
        }
    }
}
