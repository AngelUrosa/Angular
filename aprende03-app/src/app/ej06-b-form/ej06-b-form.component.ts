import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ej06-b-form',
  templateUrl: './ej06-b-form.component.html',
  styleUrls: ['./ej06-b-form.component.css']
})
export class Ej06BFormComponent implements OnInit {
  
  
  nombre: string ="";
  apellido: string ="";
  @Output() add: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
add(){
  this.addEmitter.emit(`$(this.nombre) $(this.apellido)`)
}
}
