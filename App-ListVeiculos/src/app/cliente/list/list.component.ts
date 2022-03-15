import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
  ) { }

  public clientes?: Cliente[];
  public errorMessage?: string;


  ngOnInit(): void {
    this.clienteService.obterTodos()
      .subscribe(
        cliente => this.clientes = cliente,
        error => this.errorMessage);
  }
}
