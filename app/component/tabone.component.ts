import { Component } from '@angular/core';

@Component({
    selector: 'tab-one',
    template: `
                {{title}}
                <on-changes-parent></on-changes-parent>
              `
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabOneComponent {
    title: string = "This is TabOne";
}
