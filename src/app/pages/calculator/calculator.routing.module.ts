import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from '@pages/calculator/calculator.component';

const moduleRoutes: Routes = [
    {
        path: '',
        component: CalculatorComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(moduleRoutes) ],
    exports: [ RouterModule ]
})
export class CalculatorRoutingModule {
}
