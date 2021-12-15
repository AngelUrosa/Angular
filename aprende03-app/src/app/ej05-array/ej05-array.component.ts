import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej05-array',
  templateUrl: './ej05-array.component.html',
  styleUrls: ['./ej05-array.component.css']
})
export class Ej05ArrayComponent implements OnInit {
  nombre: string ="";
  apellido: string ="";
  resultado: string ="";

  personas:array[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  une(): void {
    //this.resultado=this.nombre +' '+ this.apellido
    this.resultado=`${this.nombre} ${this.apellido}`;
  }
}
