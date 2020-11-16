export enum SolarPanelTypes {
    CrystallineSilicone = 'crystSi',
    CIS = 'CIS',
    CdTe = 'CdTe'
}

export enum SolarPanelNames {
    CrystallineSilicone = 'Crystalline Silicone',
    CIS = 'CIS',
    CdTe = 'CdTe'
}

export interface SolarPanels {
    name: SolarPanelNames;
    value: SolarPanelTypes;
}

export const SOLAR_PANELS: SolarPanels[] = [
    { name: SolarPanelNames.CrystallineSilicone, value: SolarPanelTypes.CrystallineSilicone },
    { name: SolarPanelNames.CIS, value: SolarPanelTypes.CIS },
    { name: SolarPanelNames.CdTe, value: SolarPanelTypes.CdTe },
];

