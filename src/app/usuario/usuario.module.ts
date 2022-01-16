import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng-lts/divider';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InputTextModule } from 'primeng-lts/inputtext';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng-lts/table';
import { ButtonModule } from 'primeng-lts/button';

@NgModule({
  declarations: [LoginComponent, RegistroComponent],
  imports: [
    CommonModule,
    TableModule,
    UsuarioRoutingModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
})
export class UsuarioModule {}
