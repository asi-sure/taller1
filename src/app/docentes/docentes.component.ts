import { Component, OnInit } from '@angular/core';
import { DocentesService } from '../servicios/docentes.service';
import { Docentes } from '../modelo/docente.model';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({ 
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  docentes : Docentes;


  constructor( private docService : DocentesService,
               private xrouter : Router
    ) { }

  ngOnInit(): void {
    this.docentes = this.docService.nuevoDocente();
  }

  nuevoDocentes() : void {
    this.docService.agregarDocentes(this.docentes);
    this.docentes = this.docService.nuevoDocente();
    this.xrouter.navigate(['docenlis']);
  }

}
