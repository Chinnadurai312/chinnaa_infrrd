import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { AgGridModule } from 'ag-grid-angular';
import { CountryDisplayComponent } from './country-display/country-display.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CountryalldisplayComponent } from './countryalldisplay/countryalldisplay.component';
//import { CountryDisplayEditComponent } from './country-display-edit/country-display-edit.component';
import { LoaderComponent } from './loader/loader.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryDisplayComponent,
    CountryalldisplayComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
