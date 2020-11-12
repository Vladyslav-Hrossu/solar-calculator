import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from '@pages/calculator/calculator.routing.module';
import { CalculatorFormModule } from '@pages/calculator/components/calculator-form/calculator-form.module';

@NgModule({
    declarations: [ CalculatorComponent ],
    imports: [
        CommonModule,
        CalculatorRoutingModule,
        CalculatorFormModule
    ],
    exports: [ CalculatorComponent ]
})
export class CalculatorModule {
}
