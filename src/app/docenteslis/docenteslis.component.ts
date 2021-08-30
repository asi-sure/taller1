import { Component, OnInit } from '@angular/core';
import { DocentesService } from '../servicios/docentes.service';
import { Docentes } from '../modelo/docente.model';

@Component({
  selector: 'app-docenteslis',
  templateUrl: './docenteslis.component.html',
  styleUrls: ['./docenteslis.component.css']
})
export class DocenteslisComponent implements OnInit {
  docentes2 : Docentes[];
  docentes :  Docentes;
  ocultar = false;
  index = 0

  constructor(private docService : DocentesService) { }

  ngOnInit(): void {
    this.docentes2 = this.docService.getDocente();
  }

  llamarDel(con){
    this.docService.delDocentes(con);
  }

  llamarMod(ci,nombre,ap,am,con){
    this.index=con;
    this.ocultar=true;
    this.docentes = this.docService.cargarDocente(ci,nombre,ap,am);
  }

  modDatosDocentes() : void {
    this.docService.delDocentes(this.index);
    this.docService.agregarDocentes(this.docentes);
    this.ocultar=false;
  }

}
