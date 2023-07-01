import { Component, OnInit} from '@angular/core';
import { Apostador } from '../apostador';
import { ApostadorService } from '../apostador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-apostador',
  templateUrl: './registrar-apostador.component.html',
  styleUrls: ['./registrar-apostador.component.css']
})
export class RegistrarApostadorComponent implements OnInit {

  apostador : Apostador = new Apostador();

  constructor(private apostadorServicio: ApostadorService, private router: Router){
    
  }

  ngOnInit(): void {
    
  }

  guardarApostador(){
    this.apostadorServicio.registrarApostador(this.apostador).subscribe(dato => {
      console.log(dato);
      this.irALaListaApostadores();
    }, error => console.log(error));
  }

  irALaListaApostadores(){
    this.router.navigate(['/apostador']);
  }

  onSubmit(){
    this.guardarApostador();
  }

   
}
