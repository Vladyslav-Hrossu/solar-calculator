import { Injectable } from '@angular/core';
import { SolarDatabaseService } from '@core/services/solar-database.service';
import { UKRAINE_REGIONS } from '@models/ukraine-regions.models';
import { SolarPanelTypes } from '@models/solar-panel.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { SolarData } from '@models/solar-database.models';

@Injectable()
export class SolarCalculatorFacadeService {
    get state$(): Observable<SolarData> {
        return this.state.asObservable();
    }

    private state: BehaviorSubject<SolarData> = new BehaviorSubject<SolarData>(null);

    constructor(private solarDataService: SolarDatabaseService) {
    }

    getSolarData(region: UKRAINE_REGIONS, panelsType: SolarPanelTypes): Observable<SolarData> {
        return this.solarDataService.getSolarData(region, panelsType);
    }

    updateSolarData(data: SolarData): void {
        this.state.next(data);
    }
}
