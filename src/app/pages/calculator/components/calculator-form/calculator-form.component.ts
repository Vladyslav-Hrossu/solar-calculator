import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UKRAINE_REGIONS_DISPLAY } from '@models/ukraine-regions.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractFormComponent } from '@shared/classes/abstract-form-component';
import { SolarDatabaseService } from '@core/services/solar-database.service';

@Component({
    selector: 'app-calculator-form',
    templateUrl: './calculator-form.component.html',
    styleUrls: [ './calculator-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ SolarDatabaseService ]
})
export class CalculatorFormComponent extends AbstractFormComponent implements OnInit {
    uaDisplayRegions = UKRAINE_REGIONS_DISPLAY;
    panelTypeOptions = [
        { name: 'Crystalline Silicone', value: 'srystSi' },
        { name: 'CIS', value: 'CIS' },
        { name: 'CdTe', value: 'CdTe' },
    ];

    constructor(
        private fb: FormBuilder,
        private solarDataService: SolarDatabaseService
    ) {
        super();
    }

    calculateSolarEnergy(): void {
        if (this.form.valid) {
            this.solarDataService.getSolarData(this.form.get('map').value, this.form.get('panelsType').value)
                .subscribe(data => {
                    console.log(data);
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
