using System.Collections.Generic;

namespace ListaVeiculos.Api.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Cpf { get; set; }
        public string DataNascimento { get; set; }
        public IEnumerable<Veiculo> Veiculos { get; set; }

        public Cliente() { }

        public Cliente(int id, string nome, string telefone, string cpf, string dataNascimento)
        {
            Id = id;
            Nome = nome;
            Telefone = telefone;
            Cpf = cpf;
            DataNascimento = dataNascimento;
        }
    }
}
