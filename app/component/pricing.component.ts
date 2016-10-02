import { Component } from '@angular/core';

@Component({
    selector: 'pricing',
    template: `
                {{title}}
              `
    //templateUrl: 'app/view/navbar-body.html',
    //styleUrls: ['app/view/bootstrap.min.css']
})

export class PricingComponent {
    title: string = "This is Pricing";
}
