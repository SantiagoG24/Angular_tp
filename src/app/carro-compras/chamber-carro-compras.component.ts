import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoCervezaService } from '../carrito-cerveza.service';
import { Cerveza } from '../cerveza-lista/cerveza';

@Component({
  selector: 'app-chamber-carro-compras',
  templateUrl: './chamber-carro-compras.component.html',
  styleUrls: ['./chamber-carro-compras.component.scss']
})
export class ChamberCarroComprasComponent implements OnInit {
  carritoCompra$ !: Observable <Cerveza[]>;

  constructor(private carrito:CarritoCervezaService) {
    this.carritoCompra$ = carrito.carritoCompra.asObservable();
  }

  ngOnInit(): void {
  }
  // agregaACarrito(cerveza:Cerveza):void{
  //   this.carrito.agregaACarrito(cerveza)

  // }
}
