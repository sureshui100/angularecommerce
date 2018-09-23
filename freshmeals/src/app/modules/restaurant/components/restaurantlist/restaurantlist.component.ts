import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../../../core/http/app.service';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.scss']
})
export class RestaurantlistComponent implements OnInit {
  public restList;
  constructor(public _zomatoservice:AppService, public router:Router) { }
  ngOnInit() {
    this._zomatoservice.getrestaurantlist()
    .subscribe(data => this.restList = data.restaurants)
  }
  onselect(rest){
    this.router.navigate(['/restaurantdetails',rest.restaurant.R.res_id]);
  }
}
