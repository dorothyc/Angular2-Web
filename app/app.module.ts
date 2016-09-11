import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarBodyComponent } from './component/navbar-body.component';
import { NavbarTitleComponent } from './component/navbar-title.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, NavbarBodyComponent, NavbarTitleComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
