import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestprimengComponent } from './components/testprimeng/testprimeng.component';

const routes: Routes = [
  {
    path: '',
    component: TestprimengComponent,
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./usuario/usuario.module').then((m) => m.UsuarioModule),
  },
  {
    path: 'proyecto',
    loadChildren: () =>
      import('./proyecto/proyecto.module').then((m) => m.ProyectoModule),
  },
  {
    path: 'remodelacion',
    loadChildren: () =>
      import('./remodelacion/remodelacion.module').then(
        (m) => m.RemodelacionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
