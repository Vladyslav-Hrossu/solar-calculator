import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@core/components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { FooterModule } from '@core/components/footer/footer.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        HeaderModule,
        FooterModule,
        BrowserAnimationsModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        })
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
