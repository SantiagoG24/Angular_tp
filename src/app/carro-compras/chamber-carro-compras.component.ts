import { Component, OnInit } from '@angular/core';
import { CarritoCervezaService } from '../carrito-cerveza.service';

@Component({
  selector: 'app-chamber-carro-compras',
  templateUrl: './chamber-carro-compras.component.html',
  styleUrls: ['./chamber-carro-compras.component.scss']
})
export class ChamberCarroComprasComponent implements OnInit {

  constructor(private carrito:CarritoCervezaService) { }

  ngOnInit(): void {
  }

}
