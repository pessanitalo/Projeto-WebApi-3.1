using System.ComponentModel.DataAnnotations;

namespace ListaVeiculos.Api.Models
{
    public class Veiculo
    {
        public int Id { get; set; }

        [StringLength(30, MinimumLength = 3, ErrorMessage =
           "O campo {0} precisa ter entre três e trinta caracteres!.")]
        public string Marca { get; set; }

        [StringLength(20, MinimumLength = 3, ErrorMessage =
           "O campo {0} precisa ter entre três e vinte caracteres!.")]
        public string Modelo { get; set; }

        [StringLength(10, MinimumLength = 3, ErrorMessage =
            "O campo {0} precisa ter entre três e dez caracteres!.")]
        public string Cor { get; set; }

        [StringLength(7, MinimumLength = 7, ErrorMessage =
            "O campo {0} precisa ter sete caracteres!.")]
        public string Placa { get; set; }

        [Required(ErrorMessage = "Campo {0} Obrigatório!!")]
        public int Quilometragem { get; set; }

        [StringLength(4, MinimumLength = 4, ErrorMessage =
            "O campo {0} precisa ter quatro caracteres!.")]
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
