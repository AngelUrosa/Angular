import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-ej10-personas',
  templateUrl: './ej10-personas.component.html',
  styleUrls: ['./ej10-personas.component.css']
})
export class Ej10PersonasComponent implements OnInit {


  personas: Persona[]=[]


  constructor() { 
    this.personas.push({nombre:"Ana",apellido1:"Perez",apellido2:"Lopez",fechaNacimiento: new Date("2000-01-12")});
    
    this.personas.push({nombre:"Angel",apellido1:"Urosa",fechaNacimiento: new Date("2001-01-12")});

    this.personas.push({nombre:"Luis",apellido1:"Fernandez"});
  }

  ngOnInit(): void {
  }
  borrarPersonas(fila:number): void {
  this.personas.splice(fila,1);
  }
}
