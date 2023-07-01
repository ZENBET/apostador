import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaApostadorComponent } from './lista-apostador/lista-apostador.component';

import { HttpClientModule } from '@angular/common/http';
import { RegistrarApostadorComponent } from './registrar-apostador/registrar-apostador.component'
import { FormsModule } from '@angular/forms';
import { AbrirEditarApostadorComponent } from './actualizar-apostador/actualizar-apostador.component';
import { DetallesApostadorComponent } from './detalles-apostador/detalles-apostador.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

/*
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';*/

@NgModule({
  declarations: [
    AppComponent,
    ListaApostadorComponent,
    RegistrarApostadorComponent,
    AbrirEditarApostadorComponent,
    DetallesApostadorComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule/*,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
