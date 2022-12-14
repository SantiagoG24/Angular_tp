import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CervezaListaComponent} from './cerveza-lista/cerveza-lista.component';
import { FormsModule } from '@angular/forms';
import { ChamberContactosComponent } from './contactos/chamber-contactos.component';
import { ChamberCervezasComponent } from './cervezas/chamber-cervezas.component';
import { ChamberCarroComprasComponent } from './carro-compras/chamber-carro-compras.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import {HttpClientModule}from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    CervezaListaComponent,
    ChamberContactosComponent,
    ChamberCervezasComponent,
    ChamberCarroComprasComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
