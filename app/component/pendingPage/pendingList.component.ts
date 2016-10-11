import { Component, OnInit } from '@angular/core';
import {LibraryService} from "../../service/library.service";
import {Library} from "../../service/library";

@Component({
    selector: 'pending-list',
    template: `
                {{title}}
                <br>
                <button (click) = "getLibraryFromDatabase()">Get The Latest Pending List</button>
                
                <div *ngIf = "libraries">
                <lib-list *ngFor = "let lib of libraries"
                          [library] = lib> 
                </lib-list>
                </div>
                
                <hero-form></hero-form>
              `,
    providers: [ LibraryService ]
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class PendingListComponent implements OnInit{
    title: string = "This is Pending page";
    libraries: Library[];

    ngOnInit(): void {
      this.getLibraryFromLocal();
    }

    constructor(private libraryService: LibraryService) { }

    getLibraryFromDatabase() {
        this.libraryService.getLibraryFromDatabase()
          .subscribe(lib => this.libraries = lib);
    }

    getLibraryFromLocal(){
      this.libraryService.getLibraryFromLocal().subscribe(lib => this.libraries = lib);
    }
}