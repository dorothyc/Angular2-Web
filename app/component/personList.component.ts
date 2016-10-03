import { Component, Input } from '@angular/core';
import {Person} from "../service/person";

@Component({
    selector: 'person-list',
    template: `
                <div *ngIf = "persons">
                    <h3>{{title}}</h3>
                    <div *ngFor = "let person of persons">
                        {{person.id}}
                    </div>
                </div>
              `,

})

 export class PersonList{
  title = "this is person-list";
  @Input()
  persons: Person[];
 }
