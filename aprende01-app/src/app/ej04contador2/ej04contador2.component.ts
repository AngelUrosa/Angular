import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej04contador2',
  templateUrl: './ej04contador2.component.html',
  styleUrls: ['./ej04contador2.component.css']
})
export class Ej04contador2Component implements OnInit {

  contador: number = 20;

  constructor() { }

  ngOnInit(): void {
  }
  decrementa():void{
    this.contador--;
  }
}
