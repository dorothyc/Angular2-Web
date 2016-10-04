import { Component } from '@angular/core';
import {Library} from "../service/library";

@Component({
  moduleId: module.id,
  selector: 'person-form',
  templateUrl: '../view/person-form.html'
})

export class PersonFormComponent{
  options = ["Failed", "Passed", "Pending"]
  model = new Library(666, this.options[1], "some comments");

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }
}
