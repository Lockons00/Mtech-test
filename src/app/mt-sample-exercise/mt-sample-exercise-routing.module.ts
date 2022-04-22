import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtSampleNavComponent } from './pages/mt-sample-nav/mt-sample-nav.component';

const routes: Routes = [
  {
    path: '',
    component: MtSampleNavComponent,
    children: [
      // {
      //   path: 'listado',
      //   component: ListadoComponent
      // },
      // {
      //   path: ':id',
      //   component: HeroeComponent
      // },
      // {
      //   path: '**',
      //   redirectTo: 'listado'
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtSampleExerciseRoutingModule {}
