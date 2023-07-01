import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaApostadorComponent } from './lista-apostador/lista-apostador.component';
import { RegistrarApostadorComponent } from './registrar-apostador/registrar-apostador.component';
import { AbrirEditarApostadorComponent } from './actualizar-apostador/actualizar-apostador.component';
import { DetallesApostadorComponent } from './detalles-apostador/detalles-apostador.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path : 'apostador', component: ListaApostadorComponent},
  {path : '', redirectTo: 'apostador', pathMatch: 'full'},
  {path : 'registrar-apostador', component : RegistrarApostadorComponent},
  {path : 'abrirEditar-apostador/:dni', component : AbrirEditarApostadorComponent},
  {path : 'detalles-apostador/:dni', component : DetallesApostadorComponent},
  {path : 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
