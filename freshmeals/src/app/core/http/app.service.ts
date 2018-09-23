import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { myconfig } from '../constants/config';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(public http:HttpClient) { }

  getrestaurantlist():Observable<any>{
    let headers = new HttpHeaders()
    headers = headers.set('user-key', myconfig.zomato.apikey)
    return this.http.get(`${myconfig.zomato.zomatoUrl}/search?q=indian&lat=13.067439&lon=80.237617&radius=5000&cuisines=italian%2C%20Cafe&sort=cost`,{headers: headers});
  }
  getrestaurant(restid):Observable<any>{
    let headers = new HttpHeaders()
    headers = headers.set('user-key', myconfig.zomato.apikey)
    return this.http.get(`${myconfig.zomato.zomatoUrl}/restaurant?res_id=${restid}`,{headers: headers});
  }

}
