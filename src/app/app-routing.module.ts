import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestprimengComponent } from './components/testprimeng/testprimeng.component';

const routes: Routes = [
  {
    path: '',
    component: TestprimengComponent,
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
