import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagnoexists',
  templateUrl: './pagnoexists.component.html',
  styleUrls: ['./pagnoexists.component.css']
})
export class PagnoexistsComponent implements OnInit {

  constructor( private xrou : Router ) { }

  ngOnInit(): void {
  }

retornar(){
  this.xrou.navigate(["/mat"]);
}

}
