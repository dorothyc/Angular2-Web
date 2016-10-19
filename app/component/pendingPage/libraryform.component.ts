/**
 * Created by linda on 2016-10-09.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Library} from "../../service/library";
import {LibraryService} from "../../service/library.service";
import {HistoryService} from "../../service/history.service";

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

  @Output()
  reviewedLib = new EventEmitter<Library>();

  constructor(private libraryService: LibraryService,
              private historyService: HistoryService){
  }


  checkUpdate(){
    if(this.library.addcomments == null){
      if ( window.confirm("No further comments?") ){
        this.library.addcomments = "No changes made";
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
        .subscribe(data => {
                            this.updatedLibs.emit(data);
                            this.reviewedLib.emit(this.library);
                           });

    this.historyService.addReviewedLibrary(this.library);
  }


  private autoAppend(): boolean{
    if(this.library.comments.includes("Manual Review"))
      return false;
    else
      return true;
  }

}
