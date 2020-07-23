import { Injectable } from '@angular/core';
//import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  
  export class Globalobject{
    isloading= false;
    // loginChecker = false;

    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
    };

    
    
  }