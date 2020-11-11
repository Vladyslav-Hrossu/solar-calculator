import { Component, OnInit } from '@angular/core';
import { UKRAINE_REGIONS } from '@models/ukraine-regions.const';

@Component({
    selector: 'app-ua-map',
    templateUrl: './ua-map.component.html',
    styleUrls: [ './ua-map.component.scss' ]
})
export class UaMapComponent implements OnInit {
    uaRegions = UKRAINE_REGIONS;

    constructor() {
    }

    ngOnInit(): void {
    }

    onClick({ target: { id } }): void {
        console.log(id);
    }
}
