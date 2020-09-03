import { Component, OnInit } from '@angular/core';
import { Spinkit, SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'spacex';

  constructor(private spinner: SpinnerVisibilityService){}
  ngOnInit(): void {
   
  }
  
}
