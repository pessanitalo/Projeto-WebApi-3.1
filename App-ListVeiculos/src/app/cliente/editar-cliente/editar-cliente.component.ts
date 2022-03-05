import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  public cliente!: Cliente;

  constructor(
    private route: ActivatedRoute,
  
  ) { this.cliente = this.route.snapshot.data['cliente'] }

  ngOnInit(): void {
  }

}
