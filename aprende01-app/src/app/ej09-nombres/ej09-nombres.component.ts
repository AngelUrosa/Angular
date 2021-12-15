import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej09-nombres',
  templateUrl: './ej09-nombres.component.html',
  styleUrls: ['./ej09-nombres.component.css']
})
export class Ej09NombresComponent implements OnInit {
  nombres: string[] = ["Ana","Antonio","Ramon","Luis"];
  constructor() { }

  ngOnInit(): void {
  }

}
