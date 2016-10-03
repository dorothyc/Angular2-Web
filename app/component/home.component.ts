import { Component, OnInit } from '@angular/core';
import {PersonService} from "../service/person.service";
import {Person} from "../service/person";

@Component({
    selector: 'home',
    template: `
                {{title}}
                <button (click) = "getPersonsFromDatabase()">Get the latest list</button>
                <person-list [persons] = persons></person-list>
              `,
    providers: [ PersonService ]
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class HomeComponent implements OnInit{
    title: string = "This is Home";
    persons: Person[];

  ngOnInit(): void {
    this.getPersonsFromLocal();
  }

    constructor(private personService: PersonService) { }

    getPersonsFromDatabase() {
        this.personService.getPersonFromDatabase()
          .subscribe(
            p => this.persons = p
          );
    }

    getPersonsFromLocal(){
      this.personService.getPersonFromLocal().subscribe(p => this.persons = p);
    }
}
