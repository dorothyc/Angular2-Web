import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'review',
  template: `
            <h3>this is a review page for {{id}}</h3>
            <button (click) = "backHome()">Back</button>
            `
})

export class ReviewComponent implements OnInit{
  id: number;
  constructor(private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe(params => this.id = Number.parseInt(params["id"]))
  }

  backHome(){
    this.router.navigate(['/pending']);
  }

}
