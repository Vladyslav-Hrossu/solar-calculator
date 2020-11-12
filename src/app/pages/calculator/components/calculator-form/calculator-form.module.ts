import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorFormComponent } from './calculator-form.component';
import { UaMapModule } from '@shared/components/ua-map/ua-map.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [ CalculatorFormComponent ],
    imports: [
        CommonModule,
        UaMapModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [CalculatorFormComponent]
})
export class CalculatorFormModule {
}
