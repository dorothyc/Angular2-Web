import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarBodyComponent } from './component/navbar-body.component';
import { NavbarTitleComponent } from './component/navbar-title.component';
import { FeatureComponent } from './component/feature.component';
import { routing } from './app.route'

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, NavbarBodyComponent, NavbarTitleComponent, FeatureComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
