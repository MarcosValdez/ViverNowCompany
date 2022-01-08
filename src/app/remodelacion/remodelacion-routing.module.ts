import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';
import { ProyeccionRentabilidadComponent } from './pages/proyeccion-rentabilidad/proyeccion-rentabilidad.component';

const routes: Routes = [
  {
    path: 'nuevo',
    component: NuevoProyectoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'rentabilidad',
    component: ProyeccionRentabilidadComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemodelacionRoutingModule {}
