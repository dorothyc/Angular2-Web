import { Component, OnInit } from '@angular/core';
import {LibraryService} from "../service/library.service";
import {Library} from "../service/library";

@Component({
    selector: 'pending',
    template: `
                {{title}}
                <button (click) = "getLibraryFromDatabase()">Get the latest list</button>
                <lib-list [libraries] = libraries></lib-list>
              `,
    providers: [ LibraryService ]
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class PendingComponent implements OnInit{
    title: string = "This is Pending";
    libraries: Library[];

  ngOnInit(): void {
    this.getLibraryFromLocal();
  }

    constructor(private personService: LibraryService) { }

    getLibraryFromDatabase() {
        this.personService.getLibraryFromDatabase()
          .subscribe(lib => this.libraries = lib);
    }

    getLibraryFromLocal(){
      this.personService.getLibraryFromLocal().subscribe(lib => this.libraries = lib);
    }
}
