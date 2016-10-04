import { Component } from '@angular/core';

@Component({
    selector: 'tab-two',
    template: `
                {{title}}
              `
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabTwoComponent {
    title: string = "This is TabTwo";
}
