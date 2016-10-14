/**
 * Created by linda on 2016-10-09.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Library} from "../../service/library";
import {LibraryService} from "../../service/library.service";

@Component({
  selector: 'library-form',
  template: `
              <form (ngSubmit) = checkUpdate() #libform = "ngForm">
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
  updatedLibs = new EventEmitter<Library[]>();

  constructor(private libraryService: LibraryService){
  }


  checkUpdate(){
    if(this.library.addcomments == null){
      if ( window.confirm("No further comments?") ){
        this.library.addcomments = "No further comments";
        this.update();
      }
    }
    else{
      if( window.confirm("Status: " + this.library.status + ";" + "Comments: " + this.library.addcomments + "?") ){
        this.update();
      }
    }
    return;
  }

  update(){
    this.libraryService.updateLibrary(this.library.id, this.library.status, (this.autoAppend()? ';Manual Review: ':';') + this.library.addcomments)
        .subscribe(data => this.updatedLibs.emit(data));
  }


  private autoAppend(): boolean{
    if(this.library.comments.includes("Manual Review"))
      return false;
    else
      return true;
  }

}
