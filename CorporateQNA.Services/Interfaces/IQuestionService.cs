using CorporateQNA.Models.DbModels;
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
        public List<QuestionViewModel> GetQuestions();
        public void AddQuestion(QuestionAddViewModel question);
        public void AddViewActivity(QuestionActivity questionActivity);
    }
}
