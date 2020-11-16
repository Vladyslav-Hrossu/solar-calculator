import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { SolarCalculatorFacadeService } from '@pages/calculator/services/solar-calculator-facade.service';
import { SolarData } from '@models/solar-database.models';
import { solarDataChartAdapter, solarDataSummaryAdapter } from '@shared/helpers/solar-data-chart-adapter';
import { MONTH_MAP, YEARS_MAP } from '@shared/constants/date.const';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { economicDataChartAdapter } from '@shared/helpers/economic-data-chart-adapter';

@Component({
    selector: 'app-calculator-output',
    templateUrl: './output-dialog.component.html',
    styleUrls: [ './output-dialog.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputDialogComponent implements OnInit {
    options: any;
    economicOptions: any;

    solarData: SolarData;
    summaryData: any;
    economicData: any;

    displayedSummaryColumns = ['Parameter', 'Value'];

    constructor(
        private solarCalcFacade: SolarCalculatorFacadeService,
        private cdr: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

    ngOnInit(): void {
        this.solarCalcFacade.getSolarData(this.data)
            .pipe()
            .subscribe(data => {
                this.solarData = data;
                this.summaryData = solarDataSummaryAdapter(this.solarData);
                this.economicData = economicDataChartAdapter(this.solarData, this.data.costs);
                this.drawChart(solarDataChartAdapter(this.solarData));
                this.drawEconomicChart(this.economicData);
            });
    }

    private drawChart(data: number[]): void {
        this.options = {
            legend: {
                data: [ 'Energy output' ],
                align: 'left'
            },
            tooltip: {
                position: 'top',
                formatter: `{a} <br/> {b}: {c} kWh`
            },
            xAxis: {
                data: MONTH_MAP,
                name: 'Month',
                silent: false,
                splitLine: {
                    show: false,
                }
            },
            yAxis: {
                name: 'Power',
                axisLabel: {
                    formatter: '{value} kWh'
                }
            },
            series: [
                {
                    name: 'Energy output',
                    type: 'bar',
                    data,
                    animationDelay: (idx) => idx * 10,
                },
            ],
            animationEasing: 'cubicInOut',
            animationDelayUpdate: (idx) => idx * 5,
            color: '#f5cb5c'
        };

        this.cdr.markForCheck();
    }

    private drawEconomicChart(data: number[]): void {
        this.economicOptions = {
            legend: {
                data: [ 'Annual income' ],
                align: 'left'
            },
            tooltip: {
                position: 'top',
                formatter: `{c}$`
            },
            xAxis: {
                data: YEARS_MAP,
                name: 'Year',
                silent: false,
                splitLine: {
                    show: false,
                }
            },
            yAxis: {
                name: 'Income',
                axisLabel: {
                    formatter: '{value}$'
                }
            },
            series: [
                {
                    name: 'Income',
                    type: 'bar',
                    data,
                    animationDelay: (idx) => idx * 10,
                },
            ],
            animationEasing: 'cubicInOut',
            animationDelayUpdate: (idx) => idx * 5,
            color: '#f5cb5c'
        };

        this.cdr.markForCheck();
    }
}
