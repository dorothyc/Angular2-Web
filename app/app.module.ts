import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';
import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';

import { HomeComponent } from './component/home.component';
import { NavbarTitleComponent } from './component/navbar-title.component';
import { PricingComponent } from './component/pricing.component';
import { FeatureComponent } from './component/feature.component';
import { AboutComponent } from './component/about.component';
import { routing } from './app.route'
import { DashListComponent } from "./component/dashlist.component";
import {PersonData} from "./service/mockperson";
import {PersonList} from "./component/personList.component";


// Looks like adding Angular2-in-memory-web-api in 'imports' will override other mock servers
@NgModule({
  imports: [ BrowserModule,
             routing,
             HttpModule,
             JsonpModule],

  declarations: [ HomeComponent,
                  NavbarTitleComponent,
                  FeatureComponent,
                  PricingComponent,
                  AboutComponent,
                  DashListComponent,
                  PersonList],

  bootstrap: [ NavbarTitleComponent ]
})
export class AppModule { }
