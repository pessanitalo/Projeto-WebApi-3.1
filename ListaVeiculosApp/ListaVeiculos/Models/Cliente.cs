using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ListaVeiculos.Api.Models
{
    public class Cliente
    {
        public int Id { get; set; }

        [StringLength(20, MinimumLength = 3, ErrorMessage =
            "O {0} precisa ter entre três e vinte caracteres!.")]
        public string Nome { get; set; }

        [StringLength(11, MinimumLength = 11, ErrorMessage =
            "O {0} precisa ter onze caracteres!.")]
        public string Telefone { get; set; }


        [StringLength(11, MinimumLength = 11, ErrorMessage =
            "O {0} precisa ter onze caracteres!.")]
        public string Cpf { get; set; }

        [StringLength(8, MinimumLength = 8, ErrorMessage =
            "O campo {0} precisa ter oito caracteres!.")]
        public string DataNascimento { get; set; }
        public IEnumerable<Veiculo>? Veiculos { get; set; }

    }
}
