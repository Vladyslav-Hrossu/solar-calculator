import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputDialogComponent } from './output-dialog.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [ OutputDialogComponent ],
    imports: [
        CommonModule,
        NgxEchartsModule.forChild(),
        MatDialogModule,
        MatButtonModule,
        MatTableModule,
        MatTabsModule
    ],
    exports: [ OutputDialogComponent ]
})
export class OutputDialogModule {
}
