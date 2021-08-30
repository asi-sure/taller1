import { Injectable } from '@angular/core';
import { Profesion } from '../modelo/profesion.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesionService {
  private baseUrl = '/api';  //direccion de la endpoint API
  private profesion: Profesion[];
    
  constructor(private http: HttpClient) {
    this.profesion = [];
   }
   //metodo que extrae datos de la API  GET
   getProfesionesLista(){
     return this.http.get(this.baseUrl+'/listapro');
   }

  // envia solo Personas      POST
  saveProfesiones(pro : Profesion) : Observable<any> {  
      let url = this.baseUrl + "/addpro";  
        return this.http.post(url,pro);  
  }

  // envia solo Personas    PUT
  modProfesiones(xcodpro: number, pro : Profesion) : Observable<any> {  
      let url = this.baseUrl + "/modpro/"+ xcodpro;  
        return this.http.put(url,pro);  
  }

  // DELETE
  deleteProfesiones(xcodpro: number){   
    return this.http.delete(this.baseUrl+'/delpro/'+ xcodpro);
  }

  getProfesiones(){
    return this.profesion;
  }

}
