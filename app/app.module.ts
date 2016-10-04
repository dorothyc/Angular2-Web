import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';
import { InMemoryWebApiModule }     from 'angular2-in-memory-web-api';

import { PendingComponent } from './component/pending.component';
import { ProjectTitleComponent } from './component/project-title.component';
import { TabTwoComponent } from './component/tabtwo.component';
import { TabOneComponent } from './component/tabone.component';
import { TabThreeComponent } from './component/tabthree.component';
import { routing } from './app.route'
import { DashListComponent } from "./component/dashlist.component";
import {PersonData} from "./service/mockperson";
import {LibraryList} from "./component/libraryList.component";
import {IdComponent} from "./component/id.component";

import { FormsModule } from '@angular/forms';
import {PersonFormComponent} from "./component/person-form.component";

// Looks like adding Angular2-in-memory-web-api in 'imports' will override other mock servers
@NgModule({
  imports: [ BrowserModule,
             routing,
             HttpModule,
             JsonpModule,
             FormsModule],

  declarations: [ PendingComponent,
                  ProjectTitleComponent,
                  TabOneComponent,
                  TabTwoComponent,
                  TabThreeComponent,
                  DashListComponent,
                  LibraryList,
                  IdComponent,
                  PersonFormComponent],

  bootstrap: [ ProjectTitleComponent ]
})
export class AppModule { }
