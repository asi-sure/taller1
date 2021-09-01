import { Component, OnInit } from '@angular/core';
import { Usuario } from './../modelo/usuario.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : Usuario[]=[  
    {
      "username" : "ABC",
      "password" : "12345",
      "informacion" : {
        "ci" : "111",
        "nombre" : "JOSE MANUEL",
        "ap" : "PERALTA",
        "am" : "MENDEZ",
        "direc"  : {
          "zona" : "SAN GERONIMO",
          "calle" : "FORTIN CAMPERO"
        },
        "files" : {
          "nombre" : "josemanuel_abc.png",
          "path" : "/assets/misfiles/"
        }  
      },
      "roles" : {
      "rolname" : "ADMINISTRADOR"
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
