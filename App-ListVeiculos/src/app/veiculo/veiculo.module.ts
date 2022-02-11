import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ListComponent } from './list/list.component';

import { veiculoRoutingModule } from './veiculo.route';

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        veiculoRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class VeiculoModule { }