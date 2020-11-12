import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorOutputComponent } from './calculator-output.component';



@NgModule({
  declarations: [CalculatorOutputComponent],
  imports: [
    CommonModule
  ],
  exports: [CalculatorOutputComponent]
})
export class CalculatorOutputModule { }
