import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { TableModule } from 'primeng-lts/table';

@NgModule({
  declarations: [LoginComponent, RegistroComponent],
  imports: [CommonModule, TableModule, UsuarioRoutingModule],
})
export class UsuarioModule {}
