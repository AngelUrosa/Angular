import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej02-arrays',
  template: `

  `,
  styles: [
  ]
})
export class Ej02ArraysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log('-----------------INICIO ARRAYS-----------------');

    //let lista: Array<number> = [1 , 2, 3];
    let lista: number[] = [1, 2, 3];
    console.log("1- Esto es una lista: " +lista);
    console.table(lista);

    let persona1:[String, String] =['80000000A','Pepito Perez Lopez'];

    console.log("2- Esto es una tupla: "+persona1);
    console.log("\t Esta es la clave ", persona1[0]);
    console.log("\t Esta es la valor ", persona1[1]);

    let personas: Array<[string,string]> = [];
    personas.push( ['80000000A','Pepito Perez Lopez']);
    personas.push( ['80000001B','Juana Arribas Nuñez']);

    //Desectructurando un array
    const[dni , nombre] = persona1;
    //Si solo necesitamos el nombre
    //const[ ,nombre] = persona1;
    console.log("4- Mosntrando nombre con desectructuracion", nombre);








    console.log('-----------------FINAL ARRAYS-----------------'); 
  }

}
