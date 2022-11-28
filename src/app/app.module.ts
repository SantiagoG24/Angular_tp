import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FormsModule } from '@angular/forms';
import { ChamberContactosComponent } from './contactos/chamber-contactos.component';
import { ChamberCervezasComponent } from './cervezas/chamber-cervezas.component';
import { ChamberCarroComprasComponent } from './carro-compras/chamber-carro-compras.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    ChamberContactosComponent,
    ChamberCervezasComponent,
    ChamberCarroComprasComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
