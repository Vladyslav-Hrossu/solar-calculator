import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IAppRoutes } from '@models/routes-model';
import { routes } from '@core/routes/routes';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
    routes: IAppRoutes = routes;

    constructor() {
    }

    ngOnInit(): void {
    }

}
