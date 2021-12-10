import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ej01PresentacionComponent } from './Ej01-presentacion/Ej01-presentacion.component';
import { Ej02AcercaDeComponent } from './ej02-acerca-de/ej02-acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    Ej01PresentacionComponent,
    Ej02AcercaDeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
