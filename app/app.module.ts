import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './component/home.component';
import { NavbarTitleComponent } from './component/navbar-title.component';
import { PricingComponent } from './component/pricing.component';
import { FeatureComponent } from './component/feature.component';
import { AboutComponent } from './component/about.component';
import { routing } from './app.route'
import {DashListComponent} from "./component/dashlist.component";

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ HomeComponent, NavbarTitleComponent, FeatureComponent, PricingComponent, AboutComponent, DashListComponent ],
  bootstrap: [ NavbarTitleComponent ]
})
export class AppModule { }
