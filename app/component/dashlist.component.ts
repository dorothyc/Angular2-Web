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
                  {{person.id}}
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
        error => this.errorMsg = <any>error,
        () => {console.log("this is person: "); console.log(this.persons[0])}
      );
  }


  addPerson(name: string) {
    console.log("Now in addPerson dashlist: ");
    if(!name) {return;}
    this.personService.addPerson(111, name)
                      .subscribe(
                        p => this.persons.push(p),
                        error => this.errorMsg = <any>error
                      );

    //test
    console.log("This is updated persons: " + JSON.stringify(this.persons));
  }

}
