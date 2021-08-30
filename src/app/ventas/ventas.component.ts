import { Component, OnInit } from '@angular/core';
import { DocentesService } from '../servicios/docentes.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  datos : any = [];

  constructor( private docService : DocentesService ) { }

  ngOnInit(): void {
    this.docService.getConsumoDatos().subscribe((data)=>{
      console.log(data);
      this.datos = data;
    });
  }

}
