import {Component, OnInit} from '@angular/core';
import {MissionService} from "../tutorial-online/service-observable/mission.service";

@Component({
    selector: 'tab-one',
    template: `
                {{title}}
                <!--
                <on-changes-parent></on-changes-parent>
                <br>
                <br>
                <heroes-list></heroes-list>
                <br>
                <mission-control></mission-control>
                <br> -->
                <div *ngFor="let his of history">
                    {{his}}
                </div>
              `,
    //providers: [MissionService]
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabOneComponent implements OnInit{
    title: string = "This is TabOne";
    history: string[] = ['a', 'b'];
    count: number = 0;
    counttwo: number = 0;
    countobs: number = 0;



    ngOnInit(){
        //this.reviewed();
    }


    constructor(private missionService: MissionService){
        /*
        this.count++;
        this.missionService.getconfirmed().subscribe(astronaut => {
            this.history.push(`${astronaut} confirmed the mission`);
            console.log("now in tabone reviewed " + this.count + " " + astronaut);
        });
        */
        this.counttwo++
        console.log("now in tab one constructor: " + this.counttwo);
        this.reviewed();
        this.reviewed();
    }

    reviewed(){
        this.count++;
        console.log("now in tab one reviewed: " + this.count);
        this.missionService.getconfirmed().subscribe(astronaut => {
                                                            for(let astro of astronaut){
                                                                this.history.push(`${astro} confirmed the mission`);
                                                            }
                                                            this.countobs++;
                                                            console.log("now in tabone observable " + this.countobs + " " + astronaut);
                                                            });
    }
}
