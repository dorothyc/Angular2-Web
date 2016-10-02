import { Component } from '@angular/core';

@Component({
    selector: 'feature',
    template: `
                {{title}}
              `
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class FeatureComponent {
    title: string = "This is Feature";
}
