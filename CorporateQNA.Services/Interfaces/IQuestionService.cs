using CorporateQNA.Models.CoreModels;
using CorporateQNA.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services.Interfaces
{
    public interface IQuestionService
    {
        public List<QuestionViewModel> GetQuestions(string userId);
        public void AddQuestion(Question question);
        public void AddViewActivity(QuestionActivity questionActivity);
        public void Upvote(QuestionActivity activity);
    }
}
