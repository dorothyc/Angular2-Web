import { Component, OnInit } from '@angular/core';
import { Person } from "../service/person";
import { PersonService } from "../service/person.service";

@Component({
  selector: 'dashlist',
  //templateUrl: 'app/view/dashlist.html',
  template: `
              <h3> Persons: </h3>
              <ul>
                <li *ngFor = "let person of persons">
                  {{person.name}}
                </li>
              </ul>
            `,
  styleUrls: ['app/view/bootstrap.css', 'app/view/dashboard.css'],
  providers: [ PersonService ]
})

export class DashListComponent {
  errorMsg: string;
  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.personService.getPerson()
      .subscribe(
        p => this.persons = p,
        error => this.errorMsg = <any>error
      );
  }
}
