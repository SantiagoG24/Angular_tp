import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cerveza } from '../beer-list/cerveza';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  cantidad!: number;

  @Input()
  max!:number;

  @Output()
  cantidadChange : EventEmitter<number>= new EventEmitter<number>();

  @Output()
  maxChange : EventEmitter<string>= new EventEmitter<string>();

  
  ngOnInit(): void {
  }
  DecrementarContador():void{
    if(this.cantidad>0){
      this.cantidad--; 
      this.cantidadChange.emit(this.cantidad);
    }
  }
  IncrementarContador():void{
    if (this.cantidad < this.max){
      this.cantidad++; 
      this.cantidadChange.emit(this.cantidad);
    }else
    this.maxChange.emit("se alcanzo un maximo");
  }
  // cambiarCantidad(event):void{ 
  //   console.log(event.key);
  //   this.cantidadChange.emit(this.cantidad);
  // }
}
