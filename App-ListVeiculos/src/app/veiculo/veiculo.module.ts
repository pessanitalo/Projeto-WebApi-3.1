import { VeiculoResolve } from './services/veiculo.resolve';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ListComponent } from './list/list.component';

import { veiculoRoutingModule } from './veiculo.route';
import { VeiculoService } from './services/veiculo.service';
import { NovoVeiculoComponent } from './novo-veiculo/novo-veiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ListComponent,
        NovoVeiculoComponent
    ],
    imports: [
        CommonModule,
        veiculoRoutingModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    providers: [
        VeiculoService,
        VeiculoResolve
    ],
    bootstrap: []
})
export class VeiculoModule { }