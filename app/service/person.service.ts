import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Person} from "./person";

@Injectable()
export class PersonService {
  constructor(private http: Http){ }

  private dataurl = 'http://localhost:4000/data';

  getPerson(): Observable<Person[]> {
    return this.http.get(this.dataurl)
               .map(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
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
