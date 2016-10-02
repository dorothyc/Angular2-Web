import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: `
                {{title}}
              `
    //templateUrl: 'app/view/navbar-body.html'
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class AboutComponent {
    title: string = "This is About";
}
