import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: InformacionComponent,
  },
  {
    path: 'listar',
    component: ListaComponent,
  },
  {
    path: 'crear',
    component: CrearComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortafolioRoutingModule {}
