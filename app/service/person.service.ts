import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Person} from "./person";

@Injectable()
export class PersonService {
  constructor(private http: Http){ }

  //private dataurl = 'http://localhost:4000/data';
  private dataurl = 'app/persons';

  getPerson(): Observable<Person[]> {
    return this.http.get(this.dataurl)
               .map(this.extractData)
               .catch(this.handleError);
  }

  
  addPerson(name: string): Observable<Person> {
    let body = JSON.stringify( {name} );
    console.log("this is body: " + body);
    let headers = new Headers({'Content-Type': 'application/json'});
    console.log("this is headers: " + headers);
    let options = new RequestOptions({headers: headers});
    console.log("this is options: " + options);

    return this.http.post(this.dataurl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response){
    console.log("this is res: " + res);
    let body = res.json();
    console.log("this is res.json: " + body);
    console.log("this is body.data: " + body.data);
    return body.data || { };
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure...
    let errorMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
