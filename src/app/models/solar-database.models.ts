export interface SolarData {
    inputs: SolarDataInputs;
    outputs: SolarDataOutputs;
}

export interface SolarDataInputs {
    location: {
        latitude: number;
        longitude: number;
        elevation: number
    };
    meteo_data: any;
    mounting_system: {
        fixed: {
            slope: {
                value: number;
                optimal: boolean;
            };
            azimuth: {
                value: number;
                optimal: boolean;
            };
        };
    };
    pv_module: {
        technology: string;
        peak_power: number;
        system_loss: number;
    };
    economic_data: any;
}

export interface SolarDataOutputs {
    monthly: {
        fixed: MonthlyOutputData[];
    };
    totals: {
        fixed: TotalOutputData;
    };
}

export interface MonthlyOutputData {
    'month': number;
    'E_d': number;
    'E_m': number;
    'H(i)_d': number;
    'H(i)_m': number;
    'SD_m': number;
}

export interface TotalOutputData extends MonthlyOutputData {
    E_y: number;
    'H(i)_y': number;
    SD_y: number;
    l_aoi: number;
    l_spec: string;
    l_tg: number;
    l_total: number;
}
