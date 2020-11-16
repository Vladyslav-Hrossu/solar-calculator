import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UKRAINE_REGIONS_DISPLAY } from '@models/ukraine-regions.models';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractFormComponent } from '@shared/classes/abstract-form-component';
import { SOLAR_PANELS } from '@models/solar-panel.models';
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

    calculateSolarEnergy(): void {
        if (this.form.valid) {
            this.openDialog();
        }
    }

    protected initForm(): void {
        this.form = this.fb.group({
            region: [ 1001, [ Validators.required ] ],
            power: [ 1, [ Validators.required, Validators.min(0.1) ] ],
            panelsType: [ 'CdTe', [ Validators.required ] ],
            efficiency: [ 100, [ Validators.required, Validators.min(1), Validators.max(100) ] ],
            costs: [ 1, [ Validators.required, Validators.min(1) ] ]
        });
    }

    private openDialog(): void {
        const dialogRef = this.dialog.open(OutputDialogComponent, {
            data: this.form.value,
            width: '1200px',
            autoFocus: false
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
