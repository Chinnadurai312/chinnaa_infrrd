import { Component, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CountryDataService } from "../services/country-data.service";
import { CountryData } from "../model/country.data";

@Component({
  selector: "app-country-display",
  templateUrl: "./country-display.component.html",
  styleUrls: ["./country-display.component.css"],
})
export class CountryDisplayComponent implements OnInit {
  CountryName: any;
  public countryData: CountryData[] = [];
  private data: CountryData[];

  constructor(
    private route: ActivatedRoute,
    private cds: CountryDataService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.CountryName =  this.route.snapshot.params["value"];
    this.route.params.subscribe((data) => {
      console.log(data);
      this.CountryName = data;
      console.log(this.CountryName.value);
      this.cds
      .getCountryData(this.CountryName.value)
      .subscribe((data) => {
        console.log(data);

        this.countryData = data;
        console.log(this.countryData);
      });
    });
  }
}
