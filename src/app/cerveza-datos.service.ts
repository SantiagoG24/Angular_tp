import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Cerveza } from './cerveza-lista/cerveza';
const URL='https://6389eead4eccb986e89ea192.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class CervezaDatosService {
  // actualizarApi(cerveza: Cerveza) {
  //   let item :Cerveza=this._carritoCompra.find((v1)=>v1.nombre==cerveza.nombre)!;
  // }

  constructor(private http: HttpClient) { }
  
  public obtenerCervezas():Observable <Cerveza[]>{
    const URLCervezas=URL+"/cervezas";
    return this.http.get<Cerveza[]>(URLCervezas)
      .pipe(
        map((cervezas:Cerveza[]) =>{
          return cervezas.map(cerveza=>{
            cerveza.cantidad=0;
            return cerveza;
          })
        })
      );
  }
}
//tap( (cervezas:Cerveza [] ) =>cervezas.forEach(cervezas=>cervezas.cantidad=0))
