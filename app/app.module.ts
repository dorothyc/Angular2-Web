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

import {LibraryList} from "./component/libraryList.component";
import {ReviewComponent} from "./component/review.component";

import { FormsModule } from '@angular/forms';
import {HeroFormComponent} from "./tutorial-online/form/hero-form.component";
import {LibraryFormComponent} from "./component/libraryform.component";
import {OnChangesParentComponent} from "./tutorial-online/onchange/onchange.parent.component";
import {OnChangesComponent} from "./tutorial-online/onchange/onchange.child.component";

// Looks like adding Angular2-in-memory-web-api in 'imports' will override other mock servers
@NgModule({
  imports: [ BrowserModule,
             routing,
             HttpModule,
             JsonpModule,
             FormsModule],

  declarations: [
    ProjectTitleComponent,

    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,

    PendingComponent,
    LibraryList,
    LibraryFormComponent,

    ReviewComponent,

    // form examples
    HeroFormComponent,

    // onchanges examples
    OnChangesParentComponent,
    OnChangesComponent
  ],

  bootstrap: [ ProjectTitleComponent ]
})
export class AppModule { }
