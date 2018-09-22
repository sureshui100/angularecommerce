import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../core/http/app.service';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.scss']
})
export class RestaurantlistComponent implements OnInit {

  public restList;
  
  constructor(public _zomatoservice:AppService) { }

  ngOnInit() {
    this._zomatoservice.getrestaurant()
    .subscribe(data => this.restList = data.restaurants)
    
  }
  

}
