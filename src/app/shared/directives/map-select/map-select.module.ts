import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSelectDirective } from './map-select.directive';



@NgModule({
  declarations: [MapSelectDirective],
  imports: [
    CommonModule
  ],
  exports: [MapSelectDirective]
})
export class MapSelectModule { }
