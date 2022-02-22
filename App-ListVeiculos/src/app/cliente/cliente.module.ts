import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente.route';
import { ClienteService } from './services/cliente.service';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        ListComponent,
        NovoClienteComponent
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        ClienteService
    ],
    bootstrap: []
})
export class ClienteModule { }