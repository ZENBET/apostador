import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apostador } from './apostador';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApostadorService {
  //Esta url obtiene el listado de todos los apostadores en el backend
  private baseUrl = "http://localhost:8080/api/v1/apostador"

  constructor(private httClient: HttpClient) { }

  //Este metodo nos sirve para obtener los apostadores
  obtenerListaApostadores(): Observable<Apostador[]>{
    return this.httClient.get<Apostador[]>(`${this.baseUrl}`)
  }

  //Este metodo nos sirve para registrar un apostador
  registrarApostador(apostador:Apostador): Observable<Object>{
    return this.httClient.post(`${this.baseUrl}`, apostador);
  }

  actualizarApostador(apostador:Apostador): Observable<Object>{
    return this.httClient.put<Apostador>(`${this.baseUrl}`, apostador);
  }

  obtenerApostadorPorDNI(dni:number): Observable<Apostador>{
    return this.httClient.get<Apostador>(`${this.baseUrl}/${dni}`);
  }

  eliminarApostador(dni:number): Observable<Object>{
    return this.httClient.delete(`${this.baseUrl}/${dni}`);
  }

  //Borrar esto si sale mal
  incrementarSaldo(dni: number, cantidad: number): Observable<any> {
    const url = `${this.baseUrl}/${dni}/incrementar-saldo`;
    const data = {
      cantidad: cantidad
    };

    return this.httClient.put(url, data);
  }
}
