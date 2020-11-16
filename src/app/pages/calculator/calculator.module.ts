import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalculatorRoutingModule } from '@pages/calculator/calculator.routing.module';
import { CalculatorFormModule } from '@pages/calculator/components/calculator-form/calculator-form.module';
import { SolarCalculatorFacadeService } from '@pages/calculator/services/solar-calculator-facade.service';
import { OutputDialogModule } from '@pages/calculator/components/output-dialog/output-dialog.module';

@NgModule({
    declarations: [ CalculatorComponent ],
    imports: [
        CommonModule,
        CalculatorRoutingModule,
        CalculatorFormModule,
        OutputDialogModule
    ],
    exports: [ CalculatorComponent ],
    providers: [ SolarCalculatorFacadeService ]
})
export class CalculatorModule {
}
