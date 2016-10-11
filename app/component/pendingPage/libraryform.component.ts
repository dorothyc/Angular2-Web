/**
 * Created by linda on 2016-10-09.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
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
                         [(ngModel)]="library.addcomments" name = "comments">
                  
                  <button type = "submit">update</button>
                  
                </div>
              </form>
            `
})

export class LibraryFormComponent{
  status = ['Pending', 'Passed', 'Failed'];

  @Input()
  library: Library;

  @Output()
  libs = new EventEmitter<Library[]>();

  constructor(private libraryService: LibraryService){
  }

  update(){
    this.libraryService.updateLibrary(this.library.id, (this.autoAppend()? 'Manual Review: ':' ') + this.library.addcomments)
        .subscribe(() => location.reload());
  }

  private autoAppend(): boolean{
    if(this.library.comments.includes("Manual Review"))
      return false;
    else
      return true;
  }
}
