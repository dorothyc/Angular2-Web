import { Component } from '@angular/core';
import {Person} from "../service/person";

@Component({
  moduleId: module.id,
  selector: 'person-form',
  template: ``
})

export class PersonFormComponent{
  options = ["Failed", "Passed", "Pending"]
  model = new Person(666, this.options[1], "some comments");

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }
}
