import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemateJudicialRoutingModule } from './remate-judicial-routing.module';
import { CrearRemateComponent } from './crear-remate/crear-remate.component';

@NgModule({
  declarations: [CrearRemateComponent],
  imports: [CommonModule, RemateJudicialRoutingModule],
})
export class RemateJudicialModule {}
