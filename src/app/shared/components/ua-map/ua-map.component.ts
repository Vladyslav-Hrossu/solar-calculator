import { ChangeDetectionStrategy, Component, forwardRef, OnInit, Self } from '@angular/core';
import { UKRAINE_REGIONS, UKRAINE_REGIONS_DISPLAY } from '@models/ukraine-regions.const';
import { NgOnDestroy } from '@core/services/ng-on-destroy.service';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-ua-map',
    templateUrl: './ua-map.component.html',
    styleUrls: [ './ua-map.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        NgOnDestroy,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UaMapComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => UaMapComponent),
            multi: true
        }
    ]
})
export class UaMapComponent implements OnInit, ControlValueAccessor {
    uaRegions = UKRAINE_REGIONS;
    uaRegionsDisplay = UKRAINE_REGIONS_DISPLAY;
    selectedRegion: UKRAINE_REGIONS = null;

    constructor(@Self() private destroy$: NgOnDestroy) {
    }

    ngOnInit(): void {
    }

    onClick({ target: { id } }): void {
        if (+id) {
            this.selectedRegion = +id;
            this.onChange(this.selectedRegion);
        }
    }

    isRegionSelected(regionId: UKRAINE_REGIONS): boolean {
        return regionId === this.selectedRegion;
    }

    writeValue(value: UKRAINE_REGIONS): void {
        this.selectedRegion = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    }

    validate(c: AbstractControl): ValidationErrors | null {
        return this.selectedRegion ? null : c.errors;
    }

    private onChange = (value: UKRAINE_REGIONS) => {
    }

    private onTouched = () => {
    }
}
