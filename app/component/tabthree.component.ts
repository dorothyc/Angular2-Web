import {Component, OnInit, Input} from '@angular/core';
import {HistoryService} from "../service/history.service";
import {Library} from "../service/library";

@Component({
    selector: 'about',
    template: `
                {{title}}
                <div *ngFor = "let lib of reviewed">
                    {{lib.id}} has been reviewed; {{lib.addcomments}}
                </div>
              `
    //templateUrl: 'app/view/navbar-body.html'
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabThreeComponent implements OnInit{
    title: string = "This is TabThree";


    reviewed: Library[] = [];


    ngOnInit(){
        this.getReviewedLib();
    }

    constructor(private historyService: HistoryService){}

    /*
    getReviewedLib(){
        console.log("now in get reviewed: ");
        this.historyService.reviewedHistory$.subscribe(
            lib => {
                this.reviewed.push(lib);
                console.log("showing lib: " + JSON.stringify(lib));
                }
        );
        console.log("done");
    }
    */


    getReviewedLib(){
        this.reviewed = this.historyService.getReviewed();
    }

}
