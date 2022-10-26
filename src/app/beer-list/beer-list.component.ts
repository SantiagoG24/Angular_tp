import { Component, OnInit } from '@angular/core';
import { Cerveza } from './cerveza';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  cervezas: Cerveza[] = [
    {
      nombre: 'Black',
      tipo: 'Porter',
      precio: 123,
      stock: 6,
      imagen:'assets/img/Cervezanegra.jpg',
      liquidacion:false,
    },
    {
      nombre: 'Baiter',
      tipo: 'IPA',
      precio: 180,
      stock: 5,
      imagen:'assets/img/ipa.png',
      liquidacion:true,
    },
    {
      nombre: 'Chilli ',
      tipo: 'Red hot',
      precio: 200,
      stock: 10,
      imagen:'assets/img/cervezaroja.jpg',
      liquidacion:false,
    },
    {
      nombre: 'Yellato',
      tipo: 'Golden retriever',
      precio: 180,
      stock: 0,
      imagen:'assets/img/cervezarubia.jpg',
      liquidacion:false,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
