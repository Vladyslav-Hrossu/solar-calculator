import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IAppRoutes } from '@models/routes-model';
import { routes } from '@core/routes/routes';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    routes: IAppRoutes = routes;

    constructor() { }

    ngOnInit(): void {
    }

}
