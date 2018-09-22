import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiKey = '0e5bcd9594308224c4a94920930e5757';
  private _url = "https://developers.zomato.com/api/v2.1/search";
  constructor(public http:HttpClient) { }

  getrestaurant():Observable<any>{
    let headers = new HttpHeaders()
    headers = headers.set('user-key', this.apiKey)
    return this.http.get(this._url,{headers: headers});
  }

}
