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
}




