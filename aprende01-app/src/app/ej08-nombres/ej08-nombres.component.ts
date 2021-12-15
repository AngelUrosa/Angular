import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej08-nombres',
  templateUrl: './ej08-nombres.component.html',
  styleUrls: ['./ej08-nombres.component.css']
})
export class Ej08NombresComponent implements OnInit {

  nombres: string[] = ["Ana","Antonio","Ramon","Luis"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
