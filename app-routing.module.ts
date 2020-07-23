import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDisplayComponent } from './country-display/country-display.component';
import { HomeComponent } from './home/home.component';
import { CountryalldisplayComponent } from './countryalldisplay/countryalldisplay.component';
//import { CountryDisplayEditComponent } from './country-display-edit/country-display-edit.component';




const routes: Routes = [
  {
    path: "countryall-display/country-display/:value",
    component: CountryDisplayComponent,
    
  },
  {
    path: "country-display/:value",
    component: CountryDisplayComponent
  },
  {
    path: "",
    component: CountryalldisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
