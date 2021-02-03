using CorporateQNA.Models.DbModels;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CorporateQNA.Models
{
    public class Context : IdentityDbContext<ApplicationUser>
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
            builder.Entity<ApplicationUser>()
                .Property(p => p.UserId)
                .UseIdentityColumn(100, 1);

            builder.Entity<Question>()
                .Property(p => p.AskedOn)
                .HasDefaultValueSql("GetDate()");

            builder.Entity<Answer>()
                .Property(p => p.AnsweredOn)
                .HasDefaultValueSql("GetDate()");

            builder.Entity<Category>()
                .Property(p => p.AddedOn)
                .HasDefaultValueSql("GetDate()");

            base.OnModelCreating(builder);
        }
    }
}
