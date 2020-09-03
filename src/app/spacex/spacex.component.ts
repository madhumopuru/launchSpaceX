import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.scss']
})
export class SpacexComponent implements OnInit {
  title = 'spacex';

  constructor(private http: HttpClient, private spinner: SpinnerVisibilityService, private router: Router){}
  YearArry:number[]=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  launch: boolean[]=[true,false]
  landing: boolean[]=[true,false]
  spackex;
  ngOnInit(): void {
    this.spinner.show()
    this.http.get("https://api.spacexdata.com/v3/launches?limit=100")
    .subscribe(data => {
      this.spackex=data;
      this.spinner.hide()
     })
  }
  getYear(year){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "launchYear": year,
      }
    };    
    this.router.navigate(["/spacex"], navigationExtras);
    this.spinner.show()
    this.http.get("https://api.spacexdata.com/v3/launches?limit=50&amp;launch_success=true&amp;land_success=true&amp;launch_year="+year)
    .subscribe(data => {
      this.spackex=data;
      this.spinner.hide()
    })
  }
  launchSuccess(launch){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "launchSuccess": launch,
      }
    };
    this.router.navigate(["/spacex"], navigationExtras);
    this.spinner.show()
    this.http.get("https://api.spacexdata.com/v3/launches?limit=50&amp;launch_success="+launch)
    .subscribe(data => {
      this.spackex=data;
      this.spinner.hide()
    })
  }
  landSuccess(lands){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "landSuccess": lands,
      }
    };
    this.router.navigate(["/spacex"], navigationExtras);
    this.spinner.show()
    this.http.get("https://api.spacexdata.com/v3/launches?limit=50&amp;launch_success=true&amp;land_success="+lands)
    .subscribe(data => {
         this.spackex=data;
         this.spinner.hide()
    })
  }
}
