import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { AboutUsComponent } from '@pages/about-us/about-us.component';

const moduleRoutes: Routes = [
    {
        path: '',
        component: AboutUsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(moduleRoutes) ],
    exports: [ RouterModule ]
})
export class AboutUsRoutingModule {
}
