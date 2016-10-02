import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: `
                {{title}}
                <dashlist></dashlist>
              `
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class HomeComponent {
    title: string = "This is Home";
}
