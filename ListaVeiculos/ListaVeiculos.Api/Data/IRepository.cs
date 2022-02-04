﻿using ListaVeiculos.Api.Models;

namespace ListaVeiculos.Api.Data
{
    public interface IRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        bool SaveChanges();

        //clientes
        Cliente[] GetAlunos();
        Cliente[] GetAlunosVeiculosId();
        Cliente GetAlunoBYId(int id);

        //veiculos
        Veiculo[] Getveiculos();
        Veiculo[] GetAllVeiculosByClienteId();
        Veiculo GetVeiculoById();

    }
}
