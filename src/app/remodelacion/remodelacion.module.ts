import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemodelacionRoutingModule } from './remodelacion-routing.module';
import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';
import { ProyeccionRentabilidadComponent } from './pages/proyeccion-rentabilidad/proyeccion-rentabilidad.component';

@NgModule({
  declarations: [NuevoProyectoComponent, ProyeccionRentabilidadComponent],
  imports: [CommonModule, RemodelacionRoutingModule],
})
export class RemodelacionModule {}
