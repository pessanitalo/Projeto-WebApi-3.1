using Microsoft.EntityFrameworkCore.Migrations;

namespace ListaVeiculos.Api.Migrations
{
    public partial class novas_entidades : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AnoFabricacao",
                table: "Veiculos",
                type: "varchar(4)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Marca",
                table: "Veiculos",
                type: "varchar(30)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Quilometragem",
                table: "Veiculos",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "DataNascimento",
                table: "Clientes",
                type: "varchar(8)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AnoFabricacao",
                table: "Veiculos");

            migrationBuilder.DropColumn(
                name: "Marca",
                table: "Veiculos");

            migrationBuilder.DropColumn(
                name: "Quilometragem",
                table: "Veiculos");

            migrationBuilder.DropColumn(
                name: "DataNascimento",
                table: "Clientes");
        }
    }
}
