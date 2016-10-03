import { Component } from '@angular/core';
import {PersonService} from "../service/person.service";
import {Person} from "../service/person";

@Component({
    selector: 'home',
    template: `
                {{title}}
                <button (click) = "getPersons()">Get Persons</button>
                <person-list [persons] = persons></person-list>
              `,
    providers: [ PersonService ]
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class HomeComponent {
    title: string = "This is Home";
    persons: Person[];

    constructor(private personService: PersonService) { }

    getPersons() {
        this.personService.getPerson()
          .subscribe(
            p => this.persons = p
          );
  }
}
