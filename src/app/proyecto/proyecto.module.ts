import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng-lts/button';
import { ProyectoRoutingModule } from './proyecto-routing.module';
import { CrearComponent } from './crear/crear.component';
import { DropdownModule } from 'primeng-lts/dropdown';
import { DividerModule } from 'primeng-lts/divider';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng-lts/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrearComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ProyectoRoutingModule,
    DropdownModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    DividerModule,
  ],
})
export class ProyectoModule {}
