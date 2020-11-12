import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UaMapComponent } from './ua-map.component';
import { MapSelectModule } from '@shared/directives/map-select/map-select.module';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    declarations: [ UaMapComponent ],
    imports: [
        CommonModule,
        MapSelectModule,
        MatTooltipModule
    ],
    exports: [ UaMapComponent ]
})
export class UaMapModule {
}
