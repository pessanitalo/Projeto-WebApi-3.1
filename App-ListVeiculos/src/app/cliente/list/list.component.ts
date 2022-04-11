import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public clientesFiltrados: any = [];
  public clientes: any;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.clientesFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.clientes;
  }

  filtrarEventos(filtrarPor: string): Cliente[] {
    filtrarPor = filtrarPor.toLowerCase();
    return this.clientes.filter(
      (evento: any) => evento.nome.toLowerCase().indexOf(filtrarPor) !== -1 || evento.cpf.toLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  //public clientes?: Cliente[];
  public errorMessage?: string;


  ngOnInit(): void {
    this.spinner.show();
    this.getClientes();
  }

  public getClientes(): void {
    this.clienteService.obterTodos().subscribe({
      next: (clientes: Cliente[]) => {
        this.clientes = clientes;
        this.clientesFiltrados = this.clientes;
      },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar...', 'error');
      },
      complete: () => this.spinner.hide()
    });
  }
}
