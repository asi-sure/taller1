import { Injectable } from '@angular/core';
import { Docentes } from '../modelo/docente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DocentesService {
  private docentes : Docentes[];
  url : string = "http://jsonplaceholder.typicode.com/todos"

  constructor( private httpCliente : HttpClient ) { 
    this.docentes = [];
  }

  delDocentes(posIndex: number){
    this.docentes.splice(posIndex,1);
  }

  public getConsumoDatos(){
    return this.httpCliente.get(this.url);
  }

  getDocente(){
     return this.docentes;
  }

  agregarDocentes(doc: Docentes){
    this.docentes.push(doc)
  }

  nuevoDocente() : Docentes {
    return {
      ci : '',
      nombre : '',
      ap : '',
      am : ''
    }
  }

  cargarDocente(xci,xnombre,xap,xam) : Docentes {
    return {
      ci : xci,
      nombre : xnombre,
      ap : xap,
      am : xam
    }
  }

}
