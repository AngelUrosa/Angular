import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej07-nombres',
  templateUrl: './ej07-nombres.component.html',
  styleUrls: ['./ej07-nombres.component.css']
})
export class Ej07NombresComponent implements OnInit {
   nombres: string[] = ["Ana","Antonio","Ramon","Luis"];
  constructor() { }

  ngOnInit(): void {
  }

}
