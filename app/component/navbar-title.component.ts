import { Component } from '@angular/core';

import '../rxjs-operators';

@Component({
    selector: 'navbar-title',
    template: `
                <h1>Project Title</h1>
                <nav>
                    <a routerLink="/home" routerLinkActive="active">Home</a>
                    <a routerLink="/feature" routerLinkActive="active">Feature</a>
                    <a routerLink="/pricing" routerLinkActive="active">Pricing</a>
                    <a routerLink="/about" routerLinkActive="active">About</a>
                </nav>
                <router-outlet></router-outlet>
                <person-form></person-form>
              `
    //templateUrl: 'app/view/navbar-title.html',
    //styleUrls: ['app/view/bootstrap.min.css', 'app/view/navbar.css']
})

export class NavbarTitleComponent {

}
