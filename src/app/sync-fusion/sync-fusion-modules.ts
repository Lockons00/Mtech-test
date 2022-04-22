import { NgModule } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  exports: [
    DropDownListModule,
    GridModule,
  ]
})
export class SyncFusionModule { }
