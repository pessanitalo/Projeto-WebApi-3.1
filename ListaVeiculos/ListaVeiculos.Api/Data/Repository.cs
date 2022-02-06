using ListaVeiculos.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ListaVeiculos.Api.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _dataContext;

        public Repository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public void Add<T>(T entity) where T : class
        {
            _dataContext.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _dataContext.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _dataContext.Remove(entity);
        }

        public bool SaveChanges()
        {
            return _dataContext.SaveChanges() > 0;
        }

        //Clientes
        public Cliente[] GetClientes()
        {
            IQueryable<Cliente> query = _dataContext.Clientes;

            query = query.AsNoTracking().OrderBy(c => c.Id);
            return query.ToArray();
        }

        public Cliente GetClienteVeiculosId(int id)
        {
            IQueryable<Cliente> query = _dataContext.Clientes;
            query = query.Include(a => a.Veiculos).
            Where(a => a.Id == id);
            return query.FirstOrDefault();
        }

        public Cliente GetClienteById(int id)
        {
            IQueryable<Cliente> query = _dataContext.Clientes;
            query = query.AsNoTracking()
                .OrderBy(c => c.Id)
                .Where(c => c.Id == id);
            return query.FirstOrDefault();
        }


        //Veiculos
        public Veiculo[] Getveiculos()
        {
            IQueryable<Veiculo> query = _dataContext.Veiculos;

            query = query.AsNoTracking().OrderBy(c => c.Id);
            return query.ToArray();
        }

        public Veiculo getVeiculoClienteId(int id)
        {
            IQueryable<Veiculo> query = _dataContext.Veiculos;
            query = query.Include(a => a.Cliente).
            Where(a => a.Id == id);
            return query.FirstOrDefault();
        }

        public Veiculo GetVeiculoById(int id)
        {
            IQueryable<Veiculo> query = _dataContext.Veiculos;
            query = query.AsNoTracking()
                .OrderBy(c => c.Id)
                .Where(c => c.Id == id);
            return query.FirstOrDefault();
        }
    }
}
