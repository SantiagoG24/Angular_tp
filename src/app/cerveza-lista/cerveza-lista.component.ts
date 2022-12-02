import { Component, OnInit } from '@angular/core';
import { CarritoCervezaService } from '../carrito-cerveza.service';
import { CervezaDatosService } from '../cerveza-datos.service';
import { Cerveza } from './cerveza';

@Component({
  selector: 'app-beer-list',
  templateUrl: './cerveza-lista.component.html',
  styleUrls: ['./cerveza-lista.component.scss']
})
export class CervezaListaComponent implements OnInit {
  cervezas: Cerveza[] = [];
     

  
  constructor(
    private carrito:CarritoCervezaService,
    private cervezasDataService:CervezaDatosService) {
    
  }
  agregaACarrito(cerveza:Cerveza):void{
    this.carrito.agregaACarrito(cerveza);
    // this.cervezasDataService.actualizarApi(cerveza);
    cerveza.stock-=cerveza.cantidad;
    cerveza.cantidad=0;

  }

  ngOnInit(): void { 
    this.cervezasDataService.obtenerCervezas()
    .subscribe(cervezas =>this.cervezas=cervezas);
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




{
//   "tipo": 'Porter',
//  "precio": 123,
//   "stock": 6,
// "imagen":'assets/img/Cervezanegra.jpg',
//   "liquidacion":false,
//   "nombre": 'Black',
//   "id":"12"
// },
// {
//   "tipo": 'IPA',
//   "precio": 180,
//   "stock": 5,
//   "imagen":'assets/img/ipa.png',
//   "liquidacion":true,
//   "nombre": 'Baiter',
//   "id":"13"
// },
// {
//   "tipo": 'Red hot',
//   "precio": 200,
//   "stock": 10,
//   "imagen":'assets/img/cervezaroja.jpg',
//   "liquidacion":false,
//   "nombre": 'Chilli ',
//   "id":"14"
// },
// {
//   "tipo": 'Golden retriever',
//   "precio": 180,
//   "stock": 0,
//   "imagen":'assets/img/cervezarubia.jpg',
//  "liquidacion":false,
//  "nombre": 'Yellato',
//  "id":"15"
// },