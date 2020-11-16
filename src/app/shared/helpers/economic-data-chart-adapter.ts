import { SolarData } from '@models/solar-database.models';
import { CALCULATION_PERIOD_IN_YEARS, GREEN_TARIFF } from '@shared/constants/economic.const';

export const economicDataChartAdapter = ({ outputs: { totals: { fixed: {E_y: yearlyGeneration} } } }: SolarData, totalCosts: number): number[] => {
    let result = -totalCosts;
    let resultArray = [];
    for (let i = 0; i < CALCULATION_PERIOD_IN_YEARS; i++) {
        result = Math.ceil(result + ((yearlyGeneration) * (GREEN_TARIFF * 100)) / 100);
        resultArray = [...resultArray,  result ];
    }

    return resultArray;
};
