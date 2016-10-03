import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'id',
  template: `
            <h3>this is a test id component</h3>
            <button (click) = "backHome()">>Back</button>
            `
})

export class IdComponent{
  constructor(
    private router: Router) {}

  backHome(){
    this.router.navigate(['/home']);
  }

}
