import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractFormComponent } from '@shared/classes/abstract-form-component';
import { UKRAINE_REGIONS_DISPLAY } from '@models/ukraine-regions.const';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: [ './calculator.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent extends AbstractFormComponent implements OnInit {
    uaDisplayRegions = UKRAINE_REGIONS_DISPLAY;
    panelTypeOptions = [
        { name: 'Crystalline Silicone', value: 'crystallineSilicone' },
        { name: 'CIS', value: 'crystallineSilicone' },
        { name: 'CdTe', value: 'crystallineSilicone' },
    ];

    constructor(private fb: FormBuilder) {
        super();
    }

    calculateSolarEnergy(): void {
        console.log(this.form);
    }

    protected initForm(): void {
        this.form = this.fb.group({
            map: [ null, [ Validators.required ] ],
            power: [ null, [ Validators.required, Validators.min(0.1) ] ],
            panelsType: [ null, [ Validators.required ] ],
            efficiency: [ 100, [ Validators.required, Validators.min(1), Validators.max(100) ] ],
            costs: [ null, [ Validators.required, Validators.min(1) ] ]
        });
    }
}