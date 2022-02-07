using System;

namespace ListaVeiculos.Api.Models
{
    public class Veiculo
    {
        public int Id { get; set; }

        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Cor { get; set; }
        public string Placa { get; set; }
        public int Quilometragem { get; set; }
        public string AnoFabricacao { get; set; }

        public int ClienteId { get; set; }

        public Cliente Cliente { get; set; }

        public Veiculo() { }

        public Veiculo(int id, string marca, string modelo, string cor, string placa, int quilometragem, string anoFabricacao, int clienteId)
        {
            Id = id;
            Marca = marca;
            Modelo = modelo;
            Cor = cor;
            Placa = placa;
            Quilometragem = quilometragem;
            AnoFabricacao = anoFabricacao;
            ClienteId = clienteId;
        }
    }
}
