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


        public Cliente[] GetAlunos()
        {
            IQueryable<Cliente> query = _dataContext.Clientes;

            query = query.AsNoTracking().OrderBy(c => c.Id);
            return query.ToArray();
        }

        public Cliente[] GetAlunosVeiculosId()
        {
            throw new System.NotImplementedException();
        }

        public Cliente GetAlunoBYId(int id)
        {
            IQueryable<Cliente> query = _dataContext.Clientes;
            query = query.AsNoTracking()
                .OrderBy(c => c.Id)
                .Where(c => c.Id == id);
            return query.FirstOrDefault();
        }

        public Veiculo[] Getveiculos()
        {
            IQueryable<Veiculo> query = _dataContext.Veiculos;

            query = query.AsNoTracking().OrderBy(c => c.Id);
            return query.ToArray();
        }

        public Veiculo[] GetAllVeiculosByClienteId()
        {
            throw new System.NotImplementedException();
        }

        public Veiculo GetVeiculoById()
        {
            throw new System.NotImplementedException();
        }
    }
}
