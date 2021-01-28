using CorporateQNA.Models.DbModels;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CorporateQNA.Models
{
    public class Context : IdentityDbContext
    {
        public Context(DbContextOptions options) : base(options) { }

        public DbSet<UserInfo> UsersInfo { get; set; }
        public DbSet<UserData> UsersData { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<UserInfo>()
                .HasKey(m=>m.UserId);
        }
    }
}
