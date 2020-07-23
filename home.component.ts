import { Component, OnInit } from '@angular/core';
import { CountryDataService } from "../services/country-data.service";
import { CountryData } from "../model/country.data";
import { Router, ActivatedRoute } from "@angular/router";
import { Globalobject } from '../globalObject';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rowData : CountryData[] = [];
  private data: CountryData[];



  constructor( private cds: CountryDataService, private route: Router,private globalObject : Globalobject) { }

  ngOnInit(): void {
    this.cds.getAllData().subscribe(
      (data) => {
       
        this.rowData = data;
        console.log(this.rowData);
      }

    )
    
  }

call(value : string){
    console.log(value);
    console.log("call called");
    if(value.length){
      this.route.navigate([`country-display/${value}`]);
    }
    
  }

}
