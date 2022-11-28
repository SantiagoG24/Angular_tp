import { Injectable } from '@angular/core';
import { Cerveza } from './beer-list/cerveza';

@Injectable({
  providedIn: 'root'
})
export class CarritoCervezaService {
  agregaACarrito(cerveza: Cerveza) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
