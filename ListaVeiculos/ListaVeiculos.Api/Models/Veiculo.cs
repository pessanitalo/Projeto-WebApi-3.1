using System;

namespace ListaVeiculos.Api.Models
{
    public class Veiculo
    {
        public int Id { get; set; }
        public string Modelo { get; set; }
        public string Cor { get; set; }
        public string Placa { get; set; }

        public int ClienteId { get; set; }

        public Cliente Cliente { get; set; }

        public Veiculo() { }

        public Veiculo(int id, string modelo, string cor, string placa, int clienteId)
        {
            Id = id;
            Modelo = modelo;
            Cor = cor;
            Placa = placa;
            ClienteId = clienteId;
        }
    }
}
