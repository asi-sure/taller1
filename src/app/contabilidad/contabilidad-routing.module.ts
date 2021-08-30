import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContabilidadComponent } from './contabilidad.component';

const routes: Routes = [{ path: '', component: ContabilidadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContabilidadRoutingModule { }
