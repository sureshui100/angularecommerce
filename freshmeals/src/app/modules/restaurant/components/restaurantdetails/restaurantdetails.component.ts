import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { AppService } from '../../../../core/http/app.service';

@Component({
  selector: 'app-restaurantdetails',
  templateUrl: './restaurantdetails.component.html',
  styleUrls: ['./restaurantdetails.component.scss']
})
export class RestaurantdetailsComponent implements OnInit {

  public restId;
  public restdetails={};
  constructor(public route:ActivatedRoute, public _zomatoservice:AppService) { }

  ngOnInit() {
    this.restId = parseInt(this.route.snapshot.paramMap.get('restid'));
    this._zomatoservice.getrestaurant(this.restId)
    .subscribe(data => this.restdetails = data);
    
  }

}
