import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: `
                {{title}}
              `
    //templateUrl: 'app/view/navbar-body.html'
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabThreeComponent {
    title: string = "This is TabThree";
}
