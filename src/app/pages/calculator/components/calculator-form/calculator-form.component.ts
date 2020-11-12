import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UKRAINE_REGIONS_DISPLAY } from '@models/ukraine-regions.models';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractFormComponent } from '@shared/classes/abstract-form-component';
import { SOLAR_PANELS } from '@models/solar-panel.models';
import { SolarCalculatorFacadeService } from '@pages/calculator/services/solar-calculator-facade.service';

@Component({
    selector: 'app-calculator-form',
    templateUrl: './calculator-form.component.html',
    styleUrls: [ './calculator-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorFormComponent extends AbstractFormComponent implements OnInit {
    uaDisplayRegions = UKRAINE_REGIONS_DISPLAY;
    panelTypeOptions = SOLAR_PANELS;

    constructor(
        private fb: FormBuilder,
        private solarCalcService: SolarCalculatorFacadeService
    ) {
        super();
    }

    calculateSolarEnergy(): void {
        if (this.form.valid) {
            this.solarCalcService.getSolarData(this.form.get('map').value, this.form.get('panelsType').value)
                .subscribe(data => {
                    this.solarCalcService.updateSolarData(data);
                });
        }
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
