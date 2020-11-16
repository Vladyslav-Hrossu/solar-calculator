import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorFormComponent } from './calculator-form.component';
import { UaMapModule } from '@shared/components/ua-map/ua-map.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { OutputDialogModule } from '@pages/calculator/components/output-dialog/output-dialog.module';


@NgModule({
    declarations: [ CalculatorFormComponent ],
    imports: [
        CommonModule,
        UaMapModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        OutputDialogModule
    ],
    exports: [CalculatorFormComponent]
})
export class CalculatorFormModule {
}
