import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UaMapComponent } from './ua-map.component';


@NgModule({
    declarations: [ UaMapComponent ],
    imports: [
        CommonModule
    ],
    exports: [ UaMapComponent ]
})
export class UaMapModule {
}
