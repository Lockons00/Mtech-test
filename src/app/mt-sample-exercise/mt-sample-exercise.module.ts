import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncFusionModule } from '../sync-fusion/sync-fusion-modules';
import { MtSampleExerciseRoutingModule } from './mt-sample-exercise-routing.module';

import { FilterService, PageService } from '@syncfusion/ej2-angular-grids';

import { MtSampleNavComponent } from './pages/mt-sample-nav/mt-sample-nav.component';
import { MtSampleDetailComponent } from './components/mt-sample-detail/mt-sample-detail.component';
import { MtSampleListIndexComponent } from './components/mt-sample-list/mt-sample-list-index.component';

@NgModule({
  declarations: [
    MtSampleNavComponent,
    MtSampleDetailComponent,
    MtSampleListIndexComponent
  ],
  imports: [
    CommonModule,
    MtSampleExerciseRoutingModule,
    SyncFusionModule
  ],
  providers: [
    FilterService,
    PageService
  ]
})
export class MtSampleExerciseModule { }
