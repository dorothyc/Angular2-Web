/**
 * Created by linda on 2016-10-09.
 */

import { Component } from '@angular/core';
import { Hero }    from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})

export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model.power);
  }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)

  active = true;

  newHero() {
    this.model = new Hero(0, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
