import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UKRAINE_REGIONS_DISPLAY } from '@models/ukraine-regions.models';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractFormComponent } from '@shared/classes/abstract-form-component';
import { SOLAR_PANELS, SolarPanelTypes } from '@models/solar-panel.models';
import { MatDialog } from '@angular/material/dialog';
import { OutputDialogComponent } from '@pages/calculator/components/output-dialog/output-dialog.component';

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
        public dialog: MatDialog
    ) {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.form.get('power').valueChanges
            .subscribe(power => this.form.get('costs').setValue(Math.ceil(power * 1000 / 3 + 1200 + 1200 + 350 + 1600 + 200 )));
    }

    calculateSolarEnergy(): void {
        if (this.form.valid) {
            this.openDialog();
        }
    }

    protected initForm(): void {
        this.form = this.fb.group({
            region: [ 1007, [ Validators.required ] ],
            power: [ 10, [ Validators.required, Validators.min(0.1) ] ],
            panelsType: [ SolarPanelTypes.CrystallineSilicone, [ Validators.required ] ],
            efficiency: [ 93, [ Validators.required, Validators.min(1), Validators.max(100) ] ],
            costs: [ 7884, [ Validators.required, Validators.min(1) ] ]
        });
    }

    private openDialog(): void {
        this.dialog.open(OutputDialogComponent, {
            data: this.form.value,
            width: '1200px',
            autoFocus: false
        });
    }
}
