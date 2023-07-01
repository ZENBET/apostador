import { Component, OnInit } from '@angular/core';
import { Apostador } from '../apostador';
import { ActivatedRoute, Route } from '@angular/router';
import { ApostadorService } from '../apostador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dniUsuario: number;
  cantidad: number;
  showForm: boolean = false;

  constructor(private router: ActivatedRoute, private apostadorServicio:ApostadorService) {}

  ngOnInit(): void {
    this.dniUsuario = parseInt(localStorage.getItem('dniUsuario'));
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  incrementarSaldo(): void {
    if (!this.cantidad || this.cantidad <= 0) {
      console.error('Cantidad inválida');
      return;
    }

    this.apostadorServicio.incrementarSaldo(this.dniUsuario, this.cantidad)
      .subscribe(
        (response: any) => {
          console.log('Saldo incrementado:', response);
          // Realizar cualquier acción adicional después de incrementar el saldo
        },
        (error) => {
          console.error('Error al incrementar el saldo:', error);
          // Mostrar mensaje de error o realizar acciones adicionales en caso de error
        }
      );
      
  }

  recargarPagina():void{
    location.reload();
  }

  
}
