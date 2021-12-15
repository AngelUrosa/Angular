import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej06-b-padre',
  templateUrl: './ej06-b-padre.component.html',
  styleUrls: ['./ej06-b-padre.component.css']
})
export class Ej06BPadreComponent implements OnInit {

  public _nombres: string[]=[];
  constructor() { }

  ngOnInit(): void {
  }
get nombres(): string[] {
  return [...this._nombres];
}
add(nombre: string) {
  this._nombres.push(nombre);
}
borrarFila(pos: number) {
  this._nombres.splice(pos, 1);
}
}
