import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, empty } from "rxjs";
import { Globalobject } from "../globalObject";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CountryDataService {


  url = 'https://restcountries.eu/rest/v2/all';
  urlCountry = 'https://restcountries.eu/rest/v2/name';

  constructor(private http: HttpClient, private globalObj: Globalobject
    ) { }


    getAllData(): Observable<any> {
      this.globalObj.isloading = true;
      // return this.http.get<any>(this.url);
      return this.http
      .get(this.url)
      .pipe(
        map((response: any) => {
          
          this.globalObj.isloading = false;
          return response;
        })
      )
    }

    getCountryData(CountryName : string): Observable<any>{
      this.globalObj.isloading = true;
      const detUrl = `${this.urlCountry}/${CountryName}`;
      // return this.http.get<any>(detUrl);
      return this.http
      .get(detUrl)
      .pipe(
        map((response: any) => {
          
          this.globalObj.isloading = false;
          return response;
        })
      )

    }


}
