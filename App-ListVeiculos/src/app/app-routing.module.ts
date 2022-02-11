import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module')
      .then(m => m.ClienteModule)
  },

  {
    path: 'veiculo',
    loadChildren: () => import('./veiculo/veiculo.module')
      .then(m => m.VeiculoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
