import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../modelo/alumnos.model';
import { AlumnosService } from '../servicios/alumnos.service';

import {Subject} from 'rxjs';  // para mensaje
import {debounceTime} from 'rxjs/operators'; // para mensaje

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  title = 'LISTA DE ALUMNOS';
  registerForm: FormGroup;
  registerForm2: FormGroup;
  submitted = false;

  index = 0; //el indice para borrar

  alumnoDat="";

  alumnoI : Alumnos;
  alumnos : Alumnos[];

  private _success = new Subject<string>(); //para mensaje
  staticAlertClosed = false;  //para mensaje
  successMessage: string;  //para mensaje
  modalReference: NgbModalRef;  //para mensaje

  constructor(
    private modalService: NgbModal, 
    private formBuilder: FormBuilder,
    private aluService : AlumnosService,
  ) { } 

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      ru: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(5)]],
      nombre: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      ap: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      am: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      estado : ['0']
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
        
        this.alumnoI = {
          ru : this.registerForm.controls.ru.value,
          nombre : (this.registerForm.controls.nombre.value).toUpperCase(),
          ap : (this.registerForm.controls.ap.value).toUpperCase(),
          am : (this.registerForm.controls.am.value).toUpperCase(),
          estado : this.registerForm.controls.estado.value,
        }
        
        //llamada a los servicioss
        this.alumnoI.estado=1;
        this.aluService.addAlumnos(this.alumnoI);
        this.alumnos = this.aluService.getAlumnos();

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
            this.alumnoI = {
              ru : this.registerForm2.controls.ru.value,
              nombre : (this.registerForm2.controls.nombre.value).toUpperCase(),
              ap : (this.registerForm2.controls.ap.value).toUpperCase(),
              am : (this.registerForm2.controls.am.value).toUpperCase(),
              estado : this.registerForm.controls.estado.value,
            }

            //llamada a los servicioss            
            this.aluService.addAlumnos(this.alumnoI);//INSERTA DATO
            this.aluService.delAlumnos(this.index);  //ELIMINA DATO
            ///this.aluService.modAlumnos(this.index);
            
            this.modalReference.close();  //para cerrar
  
            this._success.next(`Los Datos se MODIFICARON Satisfactoriamente..!`);  //para mensaje
    }

    //LLAMA AL MODAL PARA ADICIONAR DATOS
    llamaModalAdd(modal){
          this.submitted = false;
          //inicializar valores del formulario
          this.registerForm.reset([{ru:''},{nombre:''},{ap:''},{am:''}]);
          //para que la ventana modal se cierre
          this.modalReference =  this.modalService.open(modal);  
    }

    //MODIFICAR
    llamaModalMod(modal, ru, nombre, ap, am, con){
      //para cargar datos para modificar
      this.registerForm.reset({ru:ru,nombre:nombre,ap:ap,am:am});
      //para que la ventana modal se cierre
      this.modalReference =  this.modalService.open(modal);  
      //guardamos el index
      this.index=con; 
    }
   
    //ELIMINAR DATOS show modal
    llamaModalDel(modal, ru, nombre, ap, am, con){
      this.alumnoI = {
        ru : ru,
        nombre : nombre,
        ap : ap,
        am : am,
        estado : 0
      }
      //para que la ventana modal se cierre
      this.modalReference =  this.modalService.open(modal);
      this.alumnoDat=nombre+"  "+ap+" "+am;
      //guardamos el index
      this.index=con; 
    }
    llamaModalDel2(modal, ru, nombre, ap, am, con){
      this.alumnoI = {
        ru : ru,
        nombre : nombre,
        ap : ap,
        am : am,
        estado : 1
      }
      //para que la ventana modal se cierre
      this.modalReference =  this.modalService.open(modal);
      this.alumnoDat=nombre+"  "+ap+" "+am;
      //guardamos el index
      this.index=con; 
    }
    /*
    llamaModalDel(modal, ru, nombre, ap, am, con){
          //para que la ventana modal se cierre
          this.modalReference =  this.modalService.open(modal);
          this.alumnoDat=nombre+"  "+ap+" "+am;
          //guardamos el index
          this.index=con; 
    }
    */
    //AHORA SI ELIMINA
    /*
    eliminar(){
          console.log(this.index);
          //Llama al servicio para eliminar
          this.alumnoI.estado=0;
          this.aluService.delAlumnos(this.index);  //ELIMINA DATO
  
          this.modalReference.close();  //para cerrar
          this._success.next(`Los Datos se ELIMINARON Satisfactoriamente..!`);  //para mensaje
    }
    */
    //AHORA SI ELIMINA
    eliminar(){
      console.log(this.index, this.alumnoI);
      //llamada a los servicioss
      this.aluService.addAlumnos(this.alumnoI);
      //Llama al servicio para eliminar
      this.aluService.delAlumnos(this.index);  //ELIMINA DATO

      this.modalReference.close();  //para cerrar
      this._success.next(`Los Datos se ELIMINARON Satisfactoriamente..!`);  //para mensaje
}


}
