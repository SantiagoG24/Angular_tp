import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cerveza } from './cerveza-lista/cerveza';

@Injectable({
  providedIn: 'root'
})

export class CarritoCervezaService {
  private _carritoCompra : Cerveza[] = [];
  carritoCompra :BehaviorSubject <Cerveza[]>=new BehaviorSubject(this._carritoCompra);

  constructor() { }

  agregaACarrito(cerveza: Cerveza) {
    let item :Cerveza=this._carritoCompra.find((v1)=>v1.nombre=cerveza.nombre)!;
    if(!item){
      this._carritoCompra.push({...cerveza});
    }else{
      item.cantidad += cerveza.cantidad; 
    }
    console.log(this.carritoCompra);
    this.carritoCompra.next(this._carritoCompra);

  }
  
}

