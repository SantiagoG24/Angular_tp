import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FormsModule } from '@angular/forms';
import { ChamberContactosComponent } from './chamber-contactos/chamber-contactos.component';
import { ChamberCervezasComponent } from './chamber-cervezas/chamber-cervezas.component';
import { ChamberCarroComprasComponent } from './chamber-carro-compras/chamber-carro-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    ChamberContactosComponent,
    ChamberCervezasComponent,
    ChamberCarroComprasComponent
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
