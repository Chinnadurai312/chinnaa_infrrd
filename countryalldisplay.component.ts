import { Component, OnInit } from '@angular/core';
import { CountryDataService } from "../services/country-data.service";
import { CountryData } from "../model/country.data";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-countryalldisplay',
  templateUrl: './countryalldisplay.component.html',
  styleUrls: ['./countryalldisplay.component.css']
})
export class CountryalldisplayComponent implements OnInit {

  public rowData : CountryData[] = [];
  private data: CountryData[];



  constructor( private cds: CountryDataService, private route: Router) { }

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
    this.route.navigate([`country-display/${value}`]);
    
  }

}
