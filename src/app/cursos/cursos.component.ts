import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  title = "Example of PIPES ";
  sueldo : number = 12345.987654;
  toDate : Date = new Date();
  obsValue= new Observable((observer)=>{
    console.log("Estamos observando.."+observer);
    setTimeout(()=>{ observer.next("90000") },1000)
  });

  @Input() car : number;

  constructor() { }

  ngOnInit() {
  }


}
