import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UKRAINE_REGIONS } from '@models/ukraine-regions.models';
import { Observable } from 'rxjs';
import { SolarData } from '@models/solar-database.models';
import { SolarPanelTypes } from '@models/solar-panel.models';

@Injectable({
    providedIn: 'root'
})
export class SolarDatabaseService {
    constructor(private http: HttpClient) {
    }

    public getSolarData(region: UKRAINE_REGIONS, panelsType: SolarPanelTypes): Observable<SolarData> {
        return this.http.get<SolarData>(`assets/database/region=${ region }&paneltype=${ panelsType }.json`);
    }
}
