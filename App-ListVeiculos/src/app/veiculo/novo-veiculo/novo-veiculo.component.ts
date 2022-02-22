import { Veiculo } from './../models/veiculo';
import { Observable } from 'rxjs/internal/Observable';
import { VeiculoService } from './../services/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrls: ['./novo-veiculo.component.css']
})
export class NovoVeiculoComponent implements OnInit {


  veiculo!: Veiculo;
  Form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: VeiculoService
  ) { }


  ngOnInit(): void {
    this.Form = this.fb.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      cor: ['', [Validators.required]],
      placa: ['', [Validators.required]],
      quilometragem: ['', [Validators.required]],
      anoFabricacao: ['', [Validators.required]],
    })
  }

//   novoVeiculo() {
//     this.service.createVeiculo(this.veiculo)
//       .subscribe(sucesso => { this.processarSucesso(sucesso) },
//         error => { this.processarError(error) }
//       )
//   }
// }


// processarSucesso(response: any){

// }

// processarError(fail: any){

// 
}