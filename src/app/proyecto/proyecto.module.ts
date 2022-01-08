import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { CrearComponent } from './crear/crear.component';

@NgModule({
  declarations: [CrearComponent],
  imports: [CommonModule, ProyectoRoutingModule],
})
export class ProyectoModule {}
