/**
 * Created by linda on 2016-10-10.
 */
import {
  Component, OnChanges, ViewChild
} from '@angular/core';
import {Hero} from "./Hero";
import {OnChangesComponent} from "./onchange.child.component";

@Component({
  moduleId: module.id,
  selector: 'on-changes-parent',
  templateUrl: 'on-changes-parent.component.html',
  styles: ['.parent {background: Lavender;}']
})
export class OnChangesParentComponent {
  hero: Hero;
  power: string;
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}
