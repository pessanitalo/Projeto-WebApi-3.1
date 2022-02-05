using ListaVeiculos.Api.Data;
using ListaVeiculos.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace ListaVeiculos.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IRepository _repository;

        public ClienteController(IRepository repository)
        {
            _repository = repository;
        }

        //Ok
        [HttpGet]
        public IActionResult get()
        {
            var result = _repository.GetClientes();
            return Ok(result);
        }

        //Ok
        [HttpGet("{id}")]
        public IActionResult getId(int id)
        {
            var cliente = _repository.GetClienteById(id);
            if (cliente == null) return BadRequest("Cliente não encontrado");

            return Ok(cliente);
        }

        //Ok
        [HttpGet("clienteVeiculos/{id}")]
        public IActionResult getClienteByVeiculosId(int id)
        {
            var cliente = _repository.GetClienteVeiculosId(id);
            if (cliente == null) return BadRequest("Cliente não encontrado");

            return Ok(cliente);
        }

        //Ok
        [HttpPost]
        public IActionResult Post(Cliente cliente)
        {
            _repository.Add(cliente);

            if (_repository.SaveChanges())
            {
                return Ok(cliente);
            }
            return BadRequest("Cliente não cadastrado");
        }

        //Ok
        [HttpPut("{id}")]
        public IActionResult Update(int id, Cliente cliente)
        {
            var clienteId = _repository.GetClienteById(id);
            if (clienteId == null) return BadRequest("Cliente não encontrado");

            _repository.Update(cliente);

            if (_repository.SaveChanges())
            {
                return Ok(cliente);
            }
            return BadRequest("Cliente não atualizado");
        }
        //Ok
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var cliente = _repository.GetClienteById(id);

            if (cliente == null)
                return BadRequest("Cliente não cadastrado");

            _repository.Delete(cliente);
            _repository.SaveChanges();
            return Ok("Cliente removido com sucesso!");
        }
    }
}
