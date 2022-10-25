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
      nombre: 'Negra',
      tipo: 'Porter',
      precio: 123,
      stock: 6,
      imagen: 'asset/img/Cervezanegra.jpge',
    },
    {
      nombre: 'baiter',
      tipo: 'IPA',
      precio: 180,
      stock: 5,
      imagen: 'asset/img/ipa.jpge',
    },
    {
      nombre: 'red hot',
      tipo: 'chilli',
      precio: 200,
      stock: 10,
      imagen: 'asset/img/cervezaroja.jpge',
    },
    {
      nombre: 'yellato',
      tipo: 'golden retriver ',
      precio: 180,
      stock: 0,
      imagen: 'asset/img/cervezaruvia.jpge',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
