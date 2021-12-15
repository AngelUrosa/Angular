import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej04-concatena',
  templateUrl: './ej04-concatena.component.html',
  styleUrls: ['./ej04-concatena.component.css']
})
export class Ej04ConcatenaComponent implements OnInit {
  nombre: string ="";
  apellido: string ="";
  resultado: string ="";
  constructor() { }

  ngOnInit(): void {
  }
  une(): void {
    //this.resultado=this.nombre +' '+ this.apellido
    this.resultado=`${this.nombre} ${this.apellido}`;
  }
}
