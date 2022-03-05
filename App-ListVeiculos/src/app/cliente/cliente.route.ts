import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { ClienteResolve } from './services/cliente.resolve';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'new', component: NovoClienteComponent },
  { path: 'detalhes/:id', component: DetalhesClienteComponent, resolve: { cliente: ClienteResolve } },
  { path: 'editar/:id', component: EditarClienteComponent, resolve: { cliente: ClienteResolve } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }