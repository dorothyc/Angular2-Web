/**
 * Created by linda on 2016-10-18.
 */

import { Component, Input, OnDestroy } from '@angular/core';
import { MissionService } from './mission.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'my-astronaut',
    template: `
    <p>
      {{astronaut}}: <strong>{{mission}}</strong>
      <button
        (click)="confirm()" >
        Confirm
      </button>
    </p>
    
    <p>{{history}}</p>
  `
})

export class AstronautComponent {
    //@Input() astronaut: string;
    astronaut: string  = 'test-astro';

    mission = '<no mission announced>';
    confirmed = false;
    announced = false;
    subscription: Subscription;

    history: string[] = [];

    constructor(private missionService: MissionService) {
        /*
        this.subscription = missionService.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.announced = true;
                this.confirmed = false;
            });
        */

        this.missionService.missionConfirmed$.subscribe(data => this.history = data);
    }

    confirm() {
        this.confirmed = true;
        this.missionService.confirmMission(this.astronaut);
    }


    /*
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
    */
}

