import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';

import { HomeComponent } from './component/home.component';
import { NavbarTitleComponent } from './component/navbar-title.component';
import { PricingComponent } from './component/pricing.component';
import { FeatureComponent } from './component/feature.component';
import { AboutComponent } from './component/about.component';
import { routing } from './app.route'
import { DashListComponent } from "./component/dashlist.component";

@NgModule({
  imports: [ BrowserModule, 
             routing,
             HttpModule,
             JsonpModule ],

  declarations: [ HomeComponent, 
                  NavbarTitleComponent, 
                  FeatureComponent, 
                  PricingComponent, 
                  AboutComponent, 
                  DashListComponent ],

  bootstrap: [ NavbarTitleComponent ]
})
export class AppModule { }
