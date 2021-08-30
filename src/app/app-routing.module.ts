import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { MateriasComponent }  from './materias/materias.component';
import { PagnoexistsComponent } from './pagnoexists/pagnoexists.component';
import { DocentesComponent }  from './docentes/docentes.component';
import { DocenteslisComponent } from './docenteslis/docenteslis.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesionComponent } from './profesion/profesion.component';

const routes : Routes = [
  {path: 'cur', component: CursosComponent },
  {path: 'mat', component: MateriasComponent },
  {path: 'pag', component: PagnoexistsComponent },
  {path: 'docen', component: DocentesComponent },
  {path: 'docenlis', component: DocenteslisComponent },
  {path: 'estud', component: EstudiantesComponent },
  {path: 'profe', component: ProfesionComponent },
  {path: '',  component: MateriasComponent },
  { path: 'ven', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule) },
  { path: 'con', loadChildren: () => import('./contabilidad/contabilidad.module').then(m => m.ContabilidadModule) },
  {path: '**', redirectTo: '/pag', pathMatch : "full" }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
