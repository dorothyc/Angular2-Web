import { Component, Input } from '@angular/core';
import {Library} from "../service/library";
import {LibraryService} from "../service/library.service";
import {Router} from "@angular/router";

@Component({
  selector: 'lib-list',
  template: `
                <div *ngIf = "libraries">
                    <h3>{{title}}</h3>
                    <div *ngFor = "let lib of libraries">
                        <span (click) = "onSelect(lib)">{{lib.id}}</span> 
                        &nbsp;
                        {{lib.library_id}} &nbsp; {{lib.status.qc0_status}} &nbsp; {{lib.status.qc_comments}}

                        <button (click) = "updateLibrary(lib, 'add something')">Update</button>
                    </div>
                </div>
                <router-outlet></router-outlet>
              `,
})

export class LibraryList{
  title = "this is lib-list";
  options = ["Pending", "Passed", "Failed"]
  @Input()
  libraries: Library[];

  constructor(
    private libraryService: LibraryService,
    private router: Router) { }

  onSelect(lib: Library){
    this.router.navigate(['/review', lib.id]);
  }

  updateLibrary(lib: Library, comments: string){
    this.libraryService.updateLibrary(lib.id, comments).subscribe(data => this.libraries = data);
  }

}
