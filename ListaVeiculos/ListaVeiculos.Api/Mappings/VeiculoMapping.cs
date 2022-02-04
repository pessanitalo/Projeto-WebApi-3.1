using ListaVeiculos.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ListaVeiculos.Api.Mappings
{
    public class VeiculoMapping : IEntityTypeConfiguration<Veiculo>
    {
        public void Configure(EntityTypeBuilder<Veiculo> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Modelo)
                .IsRequired()
                .HasColumnType("varchar(20)");

            builder.Property(p => p.Cor)
                .IsRequired()
                .HasColumnType("varchar(10)");

            builder.Property(p => p.Placa)
                .IsRequired()
                .HasColumnType("varchar(7)");

            builder.ToTable("Veiculos");
        }
    }
}
