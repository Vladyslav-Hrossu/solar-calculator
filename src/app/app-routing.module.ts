import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '@core/routes/routes';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: routes.home.routerPath,
        pathMatch: 'full'
    },
    {
        path: routes.home.routerPath,
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: routes.calculator.routerPath,
        loadChildren: () => import('./pages/calculator/calculator.module').then(m => m.CalculatorModule)
    },
    {
        path: routes.aboutUs.routerPath,
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            enableTracing: false // <-- debugging purposes only
        })
    ]
})
export class AppRoutingModule {
}
