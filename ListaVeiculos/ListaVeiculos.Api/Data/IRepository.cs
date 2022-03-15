using ListaVeiculos.Api.Models;
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
        Task<Veiculo[]> Getveiculos();
        Task<Veiculo> getVeiculoClienteId(int id);
        Task<Veiculo> GetVeiculoById(int id);

    }
}
