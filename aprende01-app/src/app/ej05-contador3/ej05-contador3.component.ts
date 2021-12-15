import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej05-contador3',
  templateUrl: './ej05-contador3.component.html',
  styleUrls: ['./ej05-contador3.component.css']
})
export class Ej05Contador3Component implements OnInit {

  contador: number = 0;
  mensaje: string ="";
  constructor() { }

  ngOnInit(): void {
  }


  decrementa():void{

    if (this.contador==0) {
    this.mensaje="No puede ser menor que 0"
    }
    else{
      this.contador--;
    }
  }

  incrementa():void{
    this.contador++;
    this.mensaje="";
  }
}
