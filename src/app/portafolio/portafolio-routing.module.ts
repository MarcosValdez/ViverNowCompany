import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CrearComponent } from './pages/crear/crear.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: InformacionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'listar',
    component: ListaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crear',
    component: CrearComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortafolioRoutingModule {}
