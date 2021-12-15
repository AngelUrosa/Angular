import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ej01PresentacionComponent } from './Ej01-presentacion/Ej01-presentacion.component';
import { Ej02AcercaDeComponent } from './ej02-acerca-de/ej02-acerca-de.component';
import { Ej03Contador1Component } from './ej03-contador1/ej03-contador1.component';
import { Ej04contador2Component } from './ej04contador2/ej04contador2.component';
import { Ej05Contador3Component } from './ej05-contador3/ej05-contador3.component';
import { Ej06Contador4Component } from './ej06-contador4/ej06-contador4.component';
import { Ej07NombresComponent } from './ej07-nombres/ej07-nombres.component';
import { Ej08NombresComponent } from './ej08-nombres/ej08-nombres.component';
import { Ej09NombresComponent } from './ej09-nombres/ej09-nombres.component';
import { Ej10PersonasComponent } from './ej10-personas/ej10-personas.component';


@NgModule({
  declarations: [
    AppComponent,
    Ej01PresentacionComponent,
    Ej02AcercaDeComponent,
    Ej03Contador1Component,
    Ej04contador2Component,
    Ej05Contador3Component,
    Ej06Contador4Component,
    Ej07NombresComponent,
    Ej08NombresComponent,
    Ej09NombresComponent,
    Ej10PersonasComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
