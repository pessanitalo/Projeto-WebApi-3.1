import { NovoVeiculoComponent } from './novo-veiculo/novo-veiculo.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { VeiculoResolve } from './services/veiculo.resolve';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'new', component: NovoVeiculoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class veiculoRoutingModule { }