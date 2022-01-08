import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';
import { TableModule } from 'primeng-lts/table';
import { CrearComponent } from './pages/crear/crear.component';
import { ListaComponent } from './pages/lista/lista.component';
import { DialogModule } from 'primeng-lts/dialog';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng-lts/card';

@NgModule({
  declarations: [InformacionComponent, CrearComponent, ListaComponent],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextareaModule,
    CardModule,
  ],
})
export class PortafolioModule {}
