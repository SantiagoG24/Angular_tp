import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { CarritoCervezaService } from '../carrito-cerveza.service';
import { Cerveza } from '../cerveza-lista/cerveza';

@Component({
  selector: 'app-chamber-carro-compras',
  templateUrl: './chamber-carro-compras.component.html',
  styleUrls: ['./chamber-carro-compras.component.scss']
})
export class ChamberCarroComprasComponent implements OnInit {
  carritoCompra !: Cerveza[];

  constructor(private carrito:CarritoCervezaService) {
    carrito.carritoCompra.subscribe((cerveza)=>this.carritoCompra=cerveza);
  }

  ngOnInit(): void {
  }
  // agregaACarrito(cerveza:Cerveza):void{
  //   this.carrito.agregaACarrito(cerveza)

  // }
}
