import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ServiciosModule } from './servicios/servicios.module';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { MateriasComponent } from './materias/materias.component';
import { AppRoutingModule } from './app-routing.module';
import { PagnoexistsComponent } from './pagnoexists/pagnoexists.component';

import { DocentesComponent } from './docentes/docentes.component';
import { DocenteslisComponent } from './docenteslis/docenteslis.component';

import { HttpClientModule } from '@angular/common/http';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfesionComponent } from './profesion/profesion.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    MateriasComponent,
    PagnoexistsComponent,
    DocentesComponent,
    DocenteslisComponent,
    EstudiantesComponent,
    ProfesionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiciosModule,
    HttpClientModule,
    NgbModule
  ],
  //providers: [{provide: APP_BASE_HREF, useValue : '/'}],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
