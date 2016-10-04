import { Component, Input } from '@angular/core';
import {Library} from "../service/library";
import {LibraryService} from "../service/library.service";

@Component({
    selector: 'lib-list',
    template: `
                <div *ngIf = "libraries">
                    <h3>{{title}}</h3>
                    <div *ngFor = "let lib of libraries">
                        <a routerLink="/id" routerLinkActive="active">
                            {{lib.id}}
                        </a>
                        <button (click) = "updateLibrary()">Update</button>
                    </div>
                </div>
                <router-outlet></router-outlet>
              `,

})

 export class LibraryList{
  title = "this is lib-list";
  @Input()
  libraries: Library[];

  constructor(private personService: LibraryService) { }

  updateLibrary(){
    //console.log("now updating");
    this.personService.updateLibrary(555, "ggg").subscribe(data => this.libraries = data);
  }
 }
