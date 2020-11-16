import { SolarData } from '@models/solar-database.models';

export const solarDataChartAdapter = ({ outputs: { monthly: { fixed } } }: SolarData): number[] => {
    return fixed.map(({ E_m }) => E_m);
};

export const solarDataSummaryAdapter = ({ outputs: { totals: { fixed } }, inputs: { mounting_system: { fixed: { slope, azimuth } } } }: SolarData): any => {
    return [
        {
            key: 'Yearly output',
            value: fixed.E_y
        }, {
            key: 'Optimal slope',
            value: slope.value
        }, {
            key: 'Optimal Azimuth',
            value: azimuth.value
        }
    ];
};
