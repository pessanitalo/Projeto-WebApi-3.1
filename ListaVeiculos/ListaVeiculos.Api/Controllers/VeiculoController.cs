using ListaVeiculos.Api.Data;
using ListaVeiculos.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace ListaVeiculos.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculoController : ControllerBase
    {
        private readonly IRepository _repository;
        public VeiculoController(IRepository repository)
        {
            _repository = repository;
        }

        //ok
        [HttpGet]
        public IActionResult get()
        {
            var result = _repository.Getveiculos();
            return Ok(result);
        }

        //ok
        [HttpGet("{id}")]
        public IActionResult getId(int id)
        {
            var veiculo = _repository.GetVeiculoById(id);
            if (veiculo == null) return BadRequest("Veículo não encontrado");

            return Ok(veiculo);
        }

        //Ok
        [HttpGet("veiculoCliente/{id}")]
        public IActionResult getVeiculoClienteId(int id)
        {
            var veiculo = _repository.getVeiculoClienteId(id);
            if (veiculo == null) return BadRequest("Veiculo não encontrado");

            return Ok(veiculo);
        }
        //ok
        [HttpPost]
        public IActionResult Post(Veiculo veiculo)
        {
            _repository.Add(veiculo);

            if (_repository.SaveChanges())
            {
                return Ok(veiculo);
            }
            return BadRequest("Veículo não cadastrado");
        }
        //ok
        [HttpPut("{id}")]
        public IActionResult Update(int id, Veiculo veiculo)
        {
            var veiculoId = _repository.GetVeiculoById(id);
            if (veiculoId == null) return BadRequest("Veículo não encontrado");

            _repository.Update(veiculo);

            if (_repository.SaveChanges())
            {
                return Ok(veiculo);
            }
            return BadRequest("Veiculo não cadastrado");
        }
        //ok
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var veiculoId = _repository.GetVeiculoById(id);
            if (veiculoId == null) return BadRequest("Veículo não encontrado");

            _repository.Delete(veiculoId);
            _repository.SaveChanges();
            return Ok("Veiculo removido com sucesso!");
        }
    }
}
