import { NgModule } from '@angular/core';



import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente.route';

import { ClienteService } from './services/cliente.service';


@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule
    ],
    providers: [
        ClienteService
    ],
    bootstrap: []
})
export class ClienteModule { }