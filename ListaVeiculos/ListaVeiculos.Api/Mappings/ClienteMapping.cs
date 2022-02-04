using ListaVeiculos.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ListaVeiculos.Api.Mappings
{
    public class ClienteMapping : IEntityTypeConfiguration<Cliente>
    {

        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Nome)
                .IsRequired()
                .HasColumnType("varchar(20)");

            builder.Property(p => p.Telefone)
                .IsRequired()
                .HasColumnType("varchar(11)");

            builder.Property(p => p.Cpf)
                .IsRequired()
                .HasColumnType("varchar(11)");

            // 1 : N => Cliente : Veiculos
            builder.HasMany(f => f.Veiculos)
               .WithOne(p => p.Cliente)
               .HasForeignKey(p => p.ClienteId);

            builder.ToTable("Clientes");
        }


    }
}
