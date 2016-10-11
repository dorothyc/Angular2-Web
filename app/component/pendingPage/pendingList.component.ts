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
                    <div *ngFor = "let lib of libraries">
                        <lib-list [library] = lib></lib-list>
                        <library-form [library] = lib (updatedlibs) = "updatedLibs($event)" ></library-form>
                    </div>
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

    updatedLibs(libs: Library[]){
      console.log("i am in updatedLibs");
      //this.libraries = null;
      this.title = 'new title';
      //setTimeout(() => this.libraries = libs, 0);
    }
}
