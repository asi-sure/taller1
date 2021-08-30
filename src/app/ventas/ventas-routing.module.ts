import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasComponent } from './ventas.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  { path: '', component: VentasComponent },
  { path: 'cli', component: ClientesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
