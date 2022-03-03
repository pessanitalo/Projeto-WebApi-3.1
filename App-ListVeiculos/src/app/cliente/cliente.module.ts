import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente.route';
import { ClienteService } from './services/cliente.service';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';



@NgModule({
    declarations: [
        ListComponent,
        NovoClienteComponent,
        DetalhesClienteComponent,
        EditarClienteComponent
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