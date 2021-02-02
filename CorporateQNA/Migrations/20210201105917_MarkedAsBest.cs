using Microsoft.EntityFrameworkCore.Migrations;

namespace CorporateQNA.Migrations
{
    public partial class MarkedAsBest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "MarkedAsBest",
                table: "Answers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MarkedAsBest",
                table: "Answers");
        }
    }
}
