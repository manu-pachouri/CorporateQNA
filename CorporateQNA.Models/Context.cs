using CorporateQNA.Models.DbModels;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CorporateQNA.Models
{
    public class Context : IdentityDbContext
    {
        public Context(DbContextOptions options) : base(options) { }

        public DbSet<UserInfo> UsersInfo { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionActivity> QuestionActivities { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<AnswerActivity> AnswerActivities { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
