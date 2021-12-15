import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej01-tipos-datos',
  template: '',
  styles: [
  ]
})
export class Ej01TiposDatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('-----------------INICIO TIPOS DE DATOS-----------------');
    const IVA=21.0;
    console.log('1- Esto es una constante: ' +IVA);


    let edad: number = 20;
    console.log('2- Esto es un numero: ' + edad);

    let nombre1: String= "Pepito";
    console.log('3- Esto es un String: ' + nombre1);
    //nombre1 =123; //no se permite
    //nombre1 = null //no se permite el null

    let nombre2 : string | null ="Juanita";
    console.log('4- Esto es un string: '+ nombre2);
    nombre2=null;
    console.log('5- Esto es un string: '+ nombre2);

    let activo: boolean = true;
    console.log('6- Esto es un boolean: '+activo);

    enum DiaSemana{Lunes, Martes ,Miercoles, Jueves, Viernes, Sabado, Domingo };

    let diaSemana: DiaSemana = DiaSemana.Miercoles;
    console.log('7- Esto es un enumerado: '+diaSemana);
    console.log('8- Esto es un enumerado: '+DiaSemana[diaSemana]);
    for(const dia in DiaSemana){  //in para recorrer los enumerados
      console.log('\t',dia, DiaSemana[dia]);
    }


    console.log('----------------FINAL TIPOS DE DATOS----------------');
  }

}
