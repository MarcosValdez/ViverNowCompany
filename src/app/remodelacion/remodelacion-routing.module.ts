import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';
import { ProyeccionRentabilidadComponent } from './pages/proyeccion-rentabilidad/proyeccion-rentabilidad.component';

const routes: Routes = [
  { path: 'nuevo', component: NuevoProyectoComponent },
  { path: 'rentabilidad', component: ProyeccionRentabilidadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemodelacionRoutingModule {}
