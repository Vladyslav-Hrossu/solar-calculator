import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit{
    title = 'solar-calculator';

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get('https://re.jrc.ec.europa.eu/api/PVcalc?outputformat=basic&lat=49.963&lon=%2036.280&raddatabase=PVGIS-CMSAF&browser=0&peakpower=10&loss=14&mountingplace=free&pvtechchoice=crystSi&angle=35&aspect=0&usehorizon=1&userhorizon=&js=0')
            .subscribe(data => console.log(data));
    }
}
