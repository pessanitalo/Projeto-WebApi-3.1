import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ListComponent } from './list/list.component';

import { veiculoRoutingModule } from './veiculo.route';
import { VeiculoService } from './services/veiculo.service';

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        veiculoRoutingModule
    ],
    providers: [VeiculoService],
    bootstrap: []
})
export class VeiculoModule { }