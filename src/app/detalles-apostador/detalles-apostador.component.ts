import { Component, OnInit } from '@angular/core';
import { Apostador } from '../apostador';
import { ActivatedRoute } from '@angular/router';
import { ApostadorService } from '../apostador.service';

@Component({
  selector: 'app-detalles-apostador',
  templateUrl: './detalles-apostador.component.html',
  styleUrls: ['./detalles-apostador.component.css']
})
export class DetallesApostadorComponent implements OnInit {

  dni: number;
  apostador: Apostador;

  constructor(private route: ActivatedRoute, private apostadorServicio:ApostadorService){}

  ngOnInit(): void {
    this.dni = this.route.snapshot.params['dni'];
    
    //Si el dni es nulo, entonces buscamos el dni de localStogare que es con el cual iniciamos sesion
    if (this.dni == null) {
      this.dni = parseInt(localStorage.getItem('dniUsuario'), 10);
    }

    this.apostador = new Apostador();
    this.apostadorServicio.obtenerApostadorPorDNI(this.dni).subscribe(dato =>{
      this.apostador = dato;
    })
  }
}
