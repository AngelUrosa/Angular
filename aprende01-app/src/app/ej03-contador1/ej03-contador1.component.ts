import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej03-contador1',
  templateUrl: './ej03-contador1.component.html',
  styleUrls: ['./ej03-contador1.component.css']
})
export class Ej03Contador1Component implements OnInit {

  contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  incrementa():void{
    this.contador++;
  }

}
