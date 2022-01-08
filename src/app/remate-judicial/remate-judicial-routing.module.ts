import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRemateComponent } from './crear-remate/crear-remate.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CrearRemateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemateJudicialRoutingModule {}
