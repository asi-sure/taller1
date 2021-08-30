import { Injectable } from '@angular/core';
import { Alumnos } from '../modelo/alumnos.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  private alumnos: Alumnos[];

  constructor(private http: HttpClient) {
    this.alumnos = [];
   }

  addAlumnos(alu : Alumnos) {
    this.alumnos.push(alu);
  }

  getAlumnos(){
      return this.alumnos;
  }

  delAlumnos(posIndex: number){
      this.alumnos.splice(posIndex, 1);  //ELIMINA EL DATO
  }

  modAlumnos(posIndex: number){
    //this.alumnos.splice(posIndex, 1);  //ELIMINA EL DATO
    //console.log(alumnos.);
  }

}
