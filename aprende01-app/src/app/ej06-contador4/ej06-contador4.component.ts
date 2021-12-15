import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej06-contador4',
  templateUrl: './ej06-contador4.component.html',
  styleUrls: ['./ej06-contador4.component.css']
})
export class Ej06Contador4Component implements OnInit {

  contador: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
  decrementa():void{

    if (this.contador==0) {
    
    }
    else{
      this.contador--;
    }
  }

  incrementa():void{
    this.contador++;
    
  }
}
