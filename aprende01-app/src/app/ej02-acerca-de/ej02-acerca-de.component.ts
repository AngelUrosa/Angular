import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej02-acerca-de',
  templateUrl: './ej02-acerca-de.component.html',
  styleUrls: ['./ej02-acerca-de.component.css']
})
export class Ej02AcercaDeComponent implements OnInit {

  titulo:string = 'Aprende Angular';
  autor: any = {
        nombre:'Angel',
        apellidos: 'Urosa Nunez'};
  cursoAcademico: number =2021;
  fechaActual: Date;
  versionEnProduccion:Boolean = false;


  constructor() {this.fechaActual = new Date}

  ngOnInit(): void {
  }

}
