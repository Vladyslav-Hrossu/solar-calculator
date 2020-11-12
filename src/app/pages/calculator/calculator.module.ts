import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from '@pages/calculator/calculator.routing.module';
import { UaMapModule } from '@shared/components/ua-map/ua-map.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [ CalculatorComponent ],
    imports: [
        CommonModule,
        CalculatorRoutingModule,
        UaMapModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [ CalculatorComponent ]
})
export class CalculatorModule {
}
