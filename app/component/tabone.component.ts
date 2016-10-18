import { Component } from '@angular/core';

@Component({
    selector: 'tab-one',
    template: `
                {{title}}
                <on-changes-parent></on-changes-parent>
                <br>
                <br>
                <heroes-list></heroes-list>
                <br>
                <mission-control></mission-control>
              `
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class TabOneComponent {
    title: string = "This is TabOne";
}
