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

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  public clientes?: Cliente[];
  public errorMessage?: string;


  ngOnInit(): void {
    this.spinner.show();
    this.getClientes();
  }

  public getClientes(): void {
    this.clienteService.obterTodos().subscribe({
      next: (clientes: Cliente[]) => {
        this.clientes = clientes;
     },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar...', 'error');
      },
      complete: () => this.spinner.hide()
    });
  }
}
