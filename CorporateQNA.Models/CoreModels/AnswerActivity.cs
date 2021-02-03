namespace CorporateQNA.Models.CoreModels
{
    public class AnswerActivity
    {
        public int Id { get; set; }
        public int AnswerId { get; set; }
        public Activity Activity { get; set; }
        public long ActivityBy { get; set; }
    }
}
