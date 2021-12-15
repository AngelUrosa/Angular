import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ej01TiposDatosComponent } from './ejemplos/ej01-tipos-datos.component';
import { Ej02ArraysComponent } from './ejemplos/ej02-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    Ej01TiposDatosComponent,
    Ej02ArraysComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
