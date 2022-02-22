
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'new', component: NovoClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }