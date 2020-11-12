import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from '@pages/calculator/calculator.routing.module';
import { CalculatorFormModule } from '@pages/calculator/components/calculator-form/calculator-form.module';
import { SolarCalculatorFacadeService } from '@pages/calculator/services/solar-calculator-facade.service';
import { CalculatorOutputModule } from '@pages/calculator/components/calculator-output/calculator-output.module';

@NgModule({
    declarations: [ CalculatorComponent ],
    imports: [
        CommonModule,
        CalculatorRoutingModule,
        CalculatorFormModule,
        CalculatorOutputModule
    ],
    exports: [ CalculatorComponent ],
    providers: [ SolarCalculatorFacadeService ]
})
export class CalculatorModule {
}
