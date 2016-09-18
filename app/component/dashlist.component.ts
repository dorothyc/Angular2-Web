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
              New Person Name:
              <input #newPersonName />
              <button (click) = "addPerson(newPersonName.value); newPersonName.value = '' ">
                Add Person
              </button>
              
              <div class = "error" *ngIf = "errorMsg">{{errorMsg}}</div>
            `,
  styleUrls: ['app/view/bootstrap.css', 'app/view/dashboard.css'],
  providers: [ PersonService ]
})

export class DashListComponent implements OnInit{
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


  addPerson(name: string) {
    if(!name) {return;}
    this.personService.addPerson(name)
                      .subscribe(
                        p => this.persons.push(p),
                        error => this.errorMsg = <any>error
                      );
    console.log("persons: " + this.persons);
  }

}
