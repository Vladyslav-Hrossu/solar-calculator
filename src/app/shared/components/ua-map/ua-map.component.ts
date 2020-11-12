import { Component, OnInit } from '@angular/core';
import { UKRAINE_REGIONS, UKRAINE_REGIONS_DISPLAY } from '@models/ukraine-regions.const';

@Component({
    selector: 'app-ua-map',
    templateUrl: './ua-map.component.html',
    styleUrls: [ './ua-map.component.scss' ]
})
export class UaMapComponent implements OnInit {
    uaRegions = UKRAINE_REGIONS;
    uaRegionsDisplay = UKRAINE_REGIONS_DISPLAY;
    selectedRegion = null;

    constructor() {
    }

    ngOnInit(): void {
    }

    onClick({ target: { id } }): void {
        this.selectedRegion = +id;
    }

    isRegionSelected(regionId: UKRAINE_REGIONS): boolean {
        return regionId === this.selectedRegion;
    }
}
