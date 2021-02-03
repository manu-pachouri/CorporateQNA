using CorporateQNA.Models.CoreModels;
using CorporateQNA.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQNA.Services.Interfaces
{
    public interface IAnswerService
    {
        public void AddAnswer(Answer answer);
        public List<AnswerViewModel> GetAnswers(int qid,string userId);
        public void PostActivity(AnswerActivity answerActivity);
        public void MarkAsBest(Answer answer);
    }
}
