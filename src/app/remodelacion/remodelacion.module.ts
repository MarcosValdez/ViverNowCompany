import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RemodelacionRoutingModule } from './remodelacion-routing.module';
import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';
import { ProyeccionRentabilidadComponent } from './pages/proyeccion-rentabilidad/proyeccion-rentabilidad.component';

import { InputTextModule } from 'primeng-lts/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng-lts/dropdown';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { ButtonModule } from 'primeng-lts/button';
import { DividerModule } from 'primeng-lts/divider';
import { TableModule } from 'primeng-lts/table';

@NgModule({
  declarations: [NuevoProyectoComponent, ProyeccionRentabilidadComponent],
  imports: [
    CommonModule,
    RemodelacionRoutingModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    DividerModule,
    TableModule,
    HttpClientModule,
  ],
})
export class RemodelacionModule {}
