import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UKRAINE_REGIONS } from '@models/ukraine-regions.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SolarDatabaseService {
    constructor(private http: HttpClient) {
    }

    public getSolarData(region: UKRAINE_REGIONS, panelsType): Observable<any> {
        return this.http.get<any>(`assets/database/region=${region}&paneltype=${panelsType}.json`);
    }
}
