import { Component, OnInit } from '@angular/core';
import { Apostador } from '../apostador';
import { ApostadorService } from '../apostador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-apostador',
  templateUrl: './lista-apostador.component.html',
  styleUrls: ['./lista-apostador.component.css']
})
export class ListaApostadorComponent implements OnInit{

  apostadores: Apostador[];

  constructor(private apostadorServicio: ApostadorService, private router: Router){}

  ngOnInit(): void {
   this.ObtenerApostadores();
  }

  abrirEditarApostador(dni:number){
    this.router.navigate(['abrirEditar-apostador', dni]);
  }

  eliminarApostador(dni:number){
    this.apostadorServicio.eliminarApostador(dni).subscribe(dato => {
      console.log(dato);
      this.ObtenerApostadores();
    })
  }

  private ObtenerApostadores(){
    this.apostadorServicio.obtenerListaApostadores().subscribe(dato =>{
      this.apostadores = dato;
    })
  }

  verDetallesApostador(dni: number){
    this.router.navigate(['detalles-apostador', dni]);
  }
}
