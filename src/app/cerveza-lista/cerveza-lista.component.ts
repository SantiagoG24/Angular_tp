import { Component, OnInit } from '@angular/core';
import { CarritoCervezaService } from '../carrito-cerveza.service';
import { Cerveza } from './cerveza';

@Component({
  selector: 'app-beer-list',
  templateUrl: './cerveza-lista.component.html',
  styleUrls: ['./cerveza-lista.component.scss']
})
export class CervezaListaComponent implements OnInit {
  cervezas: Cerveza[] = [
    {
      nombre: 'Black',
      tipo: 'Porter',
      precio: 123,
      stock: 6,
      imagen:'assets/img/Cervezanegra.jpg',
      liquidacion:false,
      cantidad:0,
    },
    {
      nombre: 'Baiter',
      tipo: 'IPA',
      precio: 180,
      stock: 5,
      imagen:'assets/img/ipa.png',
      liquidacion:true,
      cantidad:0,
    },
    {
      nombre: 'Chilli ',
      tipo: 'Red hot',
      precio: 200,
      stock: 10,
      imagen:'assets/img/cervezaroja.jpg',
      liquidacion:false,
      cantidad:0,
    },
    {
      nombre: 'Yellato',
      tipo: 'Golden retriever',
      precio: 180,
      stock: 0,
      imagen:'assets/img/cervezarubia.jpg',
      liquidacion:false,
      cantidad:0,
    }
  ];
  
  constructor(private carrito:CarritoCervezaService) {
    
  }
  agregaACarrito(cerveza:Cerveza):void{
    this.carrito.agregaACarrito(cerveza)
    cerveza.stock-=cerveza.cantidad
    cerveza.cantidad=0

  }

  ngOnInit(): void {
  }

  DecrementarContador(cerveza:Cerveza):void{
    if(cerveza.cantidad>0)
    cerveza.cantidad--; 
  }

  IncrementarContador(cerveza:Cerveza):void{
    if (cerveza.cantidad < cerveza.stock)
    cerveza.cantidad++; 
  }

  maxAlcanzado(m:string):void{
    alert(m);
  }

  
  // cambioCantidad(event,cerveza:Cerveza):void{
  //   event.prevent
  //(keyup)="cambioCantidad($event,cerveza)" html
  // }
}