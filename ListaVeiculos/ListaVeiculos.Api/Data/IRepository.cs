using ListaVeiculos.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ListaVeiculos.Api.Data
{
    public interface IRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        bool SaveChanges();

        //clientes
        Cliente[] GetClientes();
        Cliente GetClienteVeiculosId(int id);
        Task<Cliente> GetClienteById(int id);

        //veiculos
        Veiculo[] Getveiculos();
        Task<Veiculo> getVeiculoClienteId(int id);
        Veiculo GetVeiculoById(int id);

    }
}
