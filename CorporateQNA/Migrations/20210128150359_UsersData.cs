using Microsoft.EntityFrameworkCore.Migrations;

namespace CorporateQNA.Migrations
{
    public partial class UsersData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UsersData",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Likes = table.Column<int>(type: "int", nullable: false),
                    Dislikes = table.Column<int>(type: "int", nullable: false),
                    QuestionsAsked = table.Column<int>(type: "int", nullable: false),
                    QuestionsAnswered = table.Column<int>(type: "int", nullable: false),
                    QuestionsSolved = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsersData", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UsersData");
        }
    }
}
