/**
 * Created by linda on 2016-10-16.
 */

import { Component } from '@angular/core';

import { EditItem } from './edit-item';
import { HeroesService } from './heroes.service';
import { Hero } from './hero';

@Component({
    selector: 'heroes-list',
    template: `
    <div>
      <ul>
        <li *ngFor="let editItem of heroes">
          <p>testing: {{editItem.item.name}}</p>
          <hero-card
            [hidden]="editItem.editing"
            [hero]="editItem.item">
          </hero-card>
          <button
            [hidden]="editItem.editing"
            (click)="editItem.editing = true">
              edit
          </button>
          <hero-editor
            (saved)="onSaved(editItem, $event)"
            (canceled)="onCanceled(editItem)"
            [hidden]="!editItem.editing"
            [hero]="editItem.item">
          </hero-editor>
        </li>
      </ul>
    </div>`
})
export class HeroesListComponent {
    heroes: Array<EditItem<Hero>>;
    constructor(heroesService: HeroesService) {
        this.heroes = heroesService.getHeroes()
            .map(item => {  
                            console.log("now in list constructor: ");
                            console.log(item);
                            return new EditItem(item)
                        });
    }

    onSaved (editItem: EditItem<Hero>, updatedHero: Hero) {
        editItem.item = updatedHero;
        editItem.editing = false;
    }

    onCanceled (editItem: EditItem<Hero>) {
        console.log("now in list oncanceled");
        console.log(editItem.item);
        editItem.editing = false;
    }
}