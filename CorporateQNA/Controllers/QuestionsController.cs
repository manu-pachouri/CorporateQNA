using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CorporateQNA.Models.ViewModels;
using CorporateQNA.Services.Interfaces;
using CorporateQNA.Models.DbModels;

namespace CorporateQNA.Controllers
{
    [Route("questions")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        public QuestionsController(IQuestionService questionService)
        {
            _questionService = questionService;
        }

        public IQuestionService _questionService { get; }

        [Route("{userId}")]
        public List<QuestionViewModel> GetAllQuestions(string userId)
        {
            return _questionService.GetQuestions(userId);
        }

        [Route("post")]
        public void PostQuestion(QuestionAddViewModel question)
        {
            _questionService.AddQuestion(question);
        }

        [Route("view")]
        public void PostViewActivity(QuestionActivity questionActivity)
        {
            _questionService.AddViewActivity(questionActivity);
        }

        [Route("upvote")]
        public void PostUpvote(QuestionActivity activity)
        {
            _questionService.Upvote(activity);
        }
    }
}
