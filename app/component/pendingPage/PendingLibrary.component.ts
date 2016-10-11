import { Component, Input } from '@angular/core';
import {Library} from "../../service/library";
import {LibraryService} from "../../service/library.service";
import {Router} from "@angular/router";

@Component({
  selector: 'lib-list',
  template: `
              <br>
              <span (click) = "onSelect(library)">{{library.id}}</span> 
              &nbsp;
              {{library.library_id}} &nbsp; {{library.status}} &nbsp; {{library.comments}} &nbsp; {{library.addcomments}}
              &nbsp;
          
              <!-- <button (click) = "updateLibrary(lib, 'add something')">Update</button> -->
              <router-outlet></router-outlet>
              `,
})

export class PendingLibraryComponent{

  @Input()
  library: Library;

  constructor(
    private libraryService: LibraryService,
    private router: Router) { }

  onSelect(lib: Library){
    this.router.navigate(['/review', lib.id]);
  }

  /*
  updateLibrary(lib: Library, comments: string){
    this.libraryService.updateLibrary(lib.id, comments).subscribe(data => this.libraries = data);
  }
  */
}
