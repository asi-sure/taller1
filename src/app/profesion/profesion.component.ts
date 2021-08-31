import { Component, OnInit } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profesion} from '../modelo/profesion.model';
import { ProfesionService } from '../servicios/profesion.service';

import {Subject} from 'rxjs';  // para mensaje
import {debounceTime} from 'rxjs/operators'; // para mensaje
import {  Router  } from '@angular/router';

@Component({
  selector: 'app-profesion',
  templateUrl: './profesion.component.html',
  styleUrls: ['./profesion.component.css']
})
export class ProfesionComponent implements OnInit {
  title = 'LISTA DE PROFESIONES (consume API) ';
  registerForm: FormGroup;
  registerForm2: FormGroup;
  submitted = false;

  index = 0; //el indice para borrar

  apiProfesion : any;

  profesionDat="";

  profesionI : Profesion;
  profesionD : Profesion[];

  private _success = new Subject<string>(); //para mensaje
  staticAlertClosed = false;  //para mensaje
  successMessage: string;  //para mensaje
  modalReference: NgbModalRef;  //para mensaje

  constructor(private modalService: NgbModal, 
              private formBuilder: FormBuilder,
              private proService : ProfesionService,
              private router: Router){}
 
  ngOnInit() {
    this.proService.getProfesionesLista().subscribe( response =>{
      this.apiProfesion = response;
    })
      
    this.registerForm = this.formBuilder.group({
      codpro: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(5)]],
      nombre: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      estado: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(1)]],
    });
    this.registerForm2 = this.registerForm;

    setTimeout(() => this.staticAlertClosed = true, 20000);  //para mensaje
    this._success.subscribe((message) => this.successMessage = message);  //para mensaje
    this._success.pipe(   //para mensaje
      debounceTime(2000)   //para mensaje
    ).subscribe(() => this.successMessage = null);  //para mensaje

  }

    // Getter para el acceso facil a los atributos del formualario
    get f() { return this.registerForm.controls; }
    get f2() { return this.registerForm2.controls; }

  //ADICIONAR DATOS
	onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if ((this.registerForm.invalid)==true) {
      return;
    }
    this.profesionI = {
      codpro : this.registerForm.controls.codpro.value,
      nombre : (this.registerForm.controls.nombre.value).toUpperCase(),
      estado : this.registerForm.controls.estado.value
    }
    this.proService.saveProfesiones(this.profesionI).subscribe(  
      response => {
          //enviamos el file OJO
          console.log("todo esta OK."); 

          this.proService.getProfesionesLista().subscribe( response =>{
            this.apiProfesion = response;
          });
      },  
      error => {  
        console.log("error while saving data in the DB"); 
      }      
    ); 

    this.modalReference.close();  //para cerrar
    this._success.next(`Los Datos se GUARDARON Satisfactoriamente..!`);  //para mensaje
}

  //MOFICAR DATOS
  onSubmit2() {
    this.submitted = true; 
    // stop here if form is invalid
    if ((this.registerForm2.invalid)==true) {
      return;
    }    
    //Inicializa Interface 
    this.profesionI = {
      codpro : this.registerForm2.controls.codpro.value,
      nombre : (this.registerForm2.controls.nombre.value).toUpperCase(),
      estado : this.registerForm2.controls.estado.value
    }
    
    this.proService.modProfesiones(this.index,this.profesionI).subscribe(  
      response => {
          //enviamos el file OJO
          console.log("todo esta OK."); 
          // REFERESCA LA LISTA
          this.proService.getProfesionesLista().subscribe( response =>{
            this.apiProfesion = response;
          });
          
      },  
      error => {  
        console.log("error while saving data in the DB");  
      }      
    );  // this.personalServic 
    
    this.modalReference.close();  //para cerrar

    this._success.next(`Los Datos se MODIFICARON Satisfactoriamente..!`);  //para mensaje
}

eliminacionLogica(codpro, nombre, estado) {

  //Inicializa Interface 
  this.profesionI = {
    codpro : codpro,
    nombre : nombre,
    estado : 0
  }
  
  this.proService.modProfesiones(codpro,this.profesionI).subscribe(  
    response => {
        //enviamos el file OJO
        console.log("todo esta OK."); 
        // REFERESCA LA LISTA
        this.proService.getProfesionesLista().subscribe( response =>{
          this.apiProfesion = response;
        });
        
    },  
    error => {  
      console.log("error while saving data in the DB");  
    }      
  );  // this.personalServic 


  this._success.next(`Los Datos se MODIFICARON Satisfactoriamente..!`);  //para mensaje
}


  //LLAMA AL MODAL PARA ADICIONAR DATOS
  llamaModalAdd(modal){
        this.submitted = false;
        //inicializar valores del formulario
        this.registerForm.reset([{codpro:''},{nombre:''},{estado:''}]);
        //para que la ventana modal se cierre
        this.modalReference =  this.modalService.open(modal);  
  }

  llamaModalMod(modal, codpro, nombre, estado){
    //para cargar datos para modificar
    this.registerForm.reset({codpro:codpro, nombre:nombre, estado:estado});
    //para que la ventana modal se cierre
    this.modalReference =  this.modalService.open(modal);  
    //guardamos el index
    this.index=codpro; 
  }

  //ELIMINAR DATOS show modal 
  llamaModalDel(modal, codpro, nombre, estado){
      //para que la ventana modal se cierre
      this.modalReference =  this.modalService.open(modal);
      this.profesionDat=codpro+" "+nombre+"  "+estado;
      //guardamos el index
      this.index=codpro; 
  }

  //AHORA SI ELIMINA
  eliminar(){
      //Llama al servicio para eliminar
      //this.aluService.delAlumnos(this.index); //ELIMINA EL DATO
      this.proService.deleteProfesiones(this.index).subscribe(
        respuesta =>{
          console.log("Se elimino correctamente.."); 
          this.proService.getProfesionesLista().subscribe( response =>{
            this.apiProfesion = response;
          })
        }
      )
      this.modalReference.close();  //para cerrar
      this._success.next(`Los Datos se ELIMINARON Satisfactoriamente..!`);  //para mensaje
   }

 

}
