/**
 * Created by linda on 2016-10-09.
 */
import {Component, Input} from '@angular/core';
import {Library} from "../../service/library";
import {LibraryService} from "../../service/library.service";

@Component({
  selector: 'library-form',
  template: `
              <form (ngSubmit) = update() #libform = "ngForm">
                <div>
                
                  <select id = "status"
                          [(ngModel)]="library.status" name = "status">
                    <option *ngFor = "let s of status" [value] = "s">{{s}}</option>
                  </select>
                  
                  <input type = "text" id = "comments"
                         [(ngModel)]="library.comments" name = "comments">
                  
                  <button type = "submit">update</button>
                  
                </div>
              </form>
            `
})

export class LibraryFormComponent{
  status = ['Pending', 'Passed', 'Failed'];

  constructor(private libraryService: LibraryService){

  }

  @Input()
  library: Library;

  update(){
    this.libraryService.updateLibrary(this.library.id, this.library.comments).subscribe();
  }
}
