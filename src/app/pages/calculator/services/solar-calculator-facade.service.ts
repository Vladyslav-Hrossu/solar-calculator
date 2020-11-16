import { Injectable } from '@angular/core';
import { SolarDatabaseService } from '@core/services/solar-database.service';
import { Observable } from 'rxjs';
import { SolarData } from '@models/solar-database.models';
import { map } from 'rxjs/operators';

@Injectable()
export class SolarCalculatorFacadeService {
    constructor(private solarDataService: SolarDatabaseService) {
    }

    getSolarData({ region, power, panelsType, efficiency, costs }): Observable<SolarData> {
        // @ts-ignore
        return this.solarDataService.getSolarData(region, panelsType)
            .pipe(
                map((data) => ({
                    ...data,
                    outputs: {
                        ...data.outputs,
                        monthly: {
                            fixed: [
                                ...data.outputs.monthly.fixed.map(item => ({
                                    ...item,
                                    E_m: Math.ceil(item.E_m * power * efficiency / 100)
                                }))
                            ]
                        },
                        totals: {
                            fixed: {
                                ...data.outputs.totals.fixed,
                                E_y: Math.ceil(data.outputs.totals.fixed.E_y * power * efficiency / 100)
                            }
                        }
                    }
                }))
            );
    }
}
