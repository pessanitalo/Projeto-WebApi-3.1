import { Veiculo } from './../models/veiculo';
import { VeiculoService } from './../services/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrls: ['./novo-veiculo.component.css']
})
export class NovoVeiculoComponent implements OnInit {

  veiculo!: Veiculo;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private veiculoService: VeiculoService,
    private toastr: ToastrService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    this.form = this.fb.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      cor: ['', [Validators.required]],
      placa: ['', [Validators.required]],
      quilometragem: ['', [Validators.required]],
      anoFabricacao: ['', [Validators.required]],
      clienteId: userId
    })
  }

  novoVeiculo() {
    this.veiculo = Object.assign({}, this.veiculo, this.form.value);
    this.veiculoService.createVeiculo(this.veiculo)
      .subscribe(sucesso => { this.processarSucesso(sucesso) },
        falha => { this.processarFalha(falha) }
      )
  }

  processarSucesso(response: any) {
    this.form.reset();
    localStorage.removeItem('id');
    let toast = this.toastr.success('Cliente cadastrado', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['cliente/list'])
      });
    }
  }

  processarFalha(fail: any) {
    this.toastr.error('Houve algum erro', 'Error!');
  }
}