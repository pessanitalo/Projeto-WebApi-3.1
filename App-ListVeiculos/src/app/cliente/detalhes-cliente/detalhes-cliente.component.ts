
import { Veiculo } from './../../veiculo/models/veiculo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-detalhes-cliente',
  templateUrl: './detalhes-cliente.component.html',
  styleUrls: ['./detalhes-cliente.component.css']
})
export class DetalhesClienteComponent implements OnInit {

  public cliente: Cliente;
  
  constructor(
    private route: ActivatedRoute
  ) { this.cliente = this.route.snapshot.data['cliente'] }

  ngOnInit(): void {
  }

}
