import { Component, OnInit } from '@angular/core';
import { ApostadorService } from '../apostador.service';
import { Apostador } from '../apostador';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-apostador',
  templateUrl: './actualizar-apostador.component.html',
  styleUrls: ['./actualizar-apostador.component.css']
})
export class AbrirEditarApostadorComponent implements OnInit{

  dni:number;
  apostador:Apostador = new Apostador();
  constructor(private apostadorService:ApostadorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.dni = this.route.snapshot.params['dni'];
    this.apostadorService.obtenerApostadorPorDNI(this.dni).subscribe(dato =>{
      this.apostador = dato;
    },error => console.log(error));
  }

  irAlaListaApostador(){
    this.router.navigate(['/apostador']);
  }

  onSubmit(){
    this.apostadorService.actualizarApostador(this.apostador).subscribe(dato => {
      this.irAlaListaApostador();
    },error => console.log(error));
  }

}
