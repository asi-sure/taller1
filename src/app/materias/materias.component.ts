import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  regForm : FormGroup;
  xenviado : boolean = false;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      sigla: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      nombre: ['', [Validators.required, Validators.email]]
    })
  }

  get f() { return this.regForm.controls; }

  enviarDatos(){
    this.xenviado = true;

    if (this.regForm.invalid) {
      return
    }

    console.log("Se guardaran los Datos Ingresados...");
  }

}
