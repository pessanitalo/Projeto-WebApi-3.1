import { VeiculoService } from './../services/veiculo.service';
import { Veiculo } from './../models/veiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private veiculoService: VeiculoService,
  ) { }

  
  public veiculos?: Veiculo[];
  public errorMessage?: string;

  ngOnInit(): void {
    console.log(this.veiculos);
    this.veiculoService.obterTodos()
      .subscribe(
        veiculo => this.veiculos = veiculo,
        error => this.errorMessage);
  }
}
