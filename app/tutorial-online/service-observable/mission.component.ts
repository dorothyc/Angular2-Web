/**
 * Created by linda on 2016-10-18.
 */

import { Component }          from '@angular/core';
import { MissionService }     from './mission.service';

@Component({
    selector: 'mission-control',
    template: `
    <h2>Mission Control</h2>
    
    <!-- <button (click)="announce()">Announce mission</button> -->
    
    <!--
    <my-astronaut *ngFor="let astronaut of astronauts"
      [astronaut]="astronaut">
    </my-astronaut>
    -->
    <my-astronaut></my-astronaut>
    
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
})
export class MissionControlComponent {
    astronauts = ['Lovell', 'Swigert', 'Haise'];
    history: string[] = [];
    missions = ['Fly to the moon!',
        'Fly to mars!',
        'Fly to Vegas!'];
    nextMission = 0;

    count: number = 0;

    constructor(private missionService: MissionService) {
        this.count++;
        missionService.missionConfirmed$.subscribe(
            astronaut => {
                console.log("i am in misson constructor: " + this.count);
                this.history.push(`${astronaut} confirmed the mission`);
                console.log(JSON.stringify(astronaut));
            });
    }

    /*
    announce() {
        let mission = this.missions[this.nextMission++];
        this.missionService.announceMission(mission);
        this.history.push(`Mission "${mission}" announced`);
        if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
    }
    */
}

