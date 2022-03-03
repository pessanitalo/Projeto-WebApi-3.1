import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'new', component: NovoClienteComponent },
  { path: 'detalhes', component: DetalhesClienteComponent },
  { path: 'editar', component: EditarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }