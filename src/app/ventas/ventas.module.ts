import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
  declarations: [VentasComponent, ClientesComponent, ProductosComponent, ReportesComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
