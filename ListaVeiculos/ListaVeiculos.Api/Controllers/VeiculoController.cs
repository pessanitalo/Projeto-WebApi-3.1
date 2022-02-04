using ListaVeiculos.Api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        [HttpGet]
        public IActionResult get()
        {
            var result = _repository.Getveiculos();
            return Ok(result);
        }
    }
}
