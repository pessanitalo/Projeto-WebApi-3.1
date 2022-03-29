import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente.route';
import { ClienteService } from './services/cliente.service';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ClienteResolve } from './services/cliente.resolve';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';



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
        NgxSpinnerModule,
        TooltipModule.forRoot(),
        NgxMaskModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            progressBar: true
        })
    ],
    providers: [
        ClienteService,
        ClienteResolve
    ],
    bootstrap: []
})
export class ClienteModule { }