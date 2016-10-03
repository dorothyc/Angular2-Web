import { Component, Input } from '@angular/core';
import {Person} from "../service/person";
import {PersonService} from "../service/person.service";

@Component({
    selector: 'person-list',
    template: `
                <div *ngIf = "persons">
                    <h3>{{title}}</h3>
                    <div *ngFor = "let person of persons">
                        <a routerLink="/id" routerLinkActive="active">
                            {{person.id}}
                        </a>
                        <button (click) = "updatePerson()">Update</button>
                    </div>
                </div>
                <router-outlet></router-outlet>
              `,

})

 export class PersonList{
  title = "this is person-list";
  @Input()
  persons: Person[];

  constructor(private personService: PersonService) { }

  updatePerson(){
    //console.log("now updating");
    this.personService.addPerson(555, "ggg").subscribe(data => this.persons = data);
  }
 }
