import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemateJudicialRoutingModule } from './remate-judicial-routing.module';
import { CrearRemateComponent } from './crear-remate/crear-remate.component';
import { GastosRemateComponent } from './gastos-remate/gastos-remate.component';

import { SelectButtonModule } from 'primeng-lts/selectbutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrearRemateComponent, GastosRemateComponent],
  imports: [
    CommonModule,
    SelectButtonModule,
    RemateJudicialRoutingModule,
    FormsModule,
  ],
})
export class RemateJudicialModule {}
