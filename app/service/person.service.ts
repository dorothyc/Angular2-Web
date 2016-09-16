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
               .map(this.extractData);
  }

  private extractData(res: Response){
    let body = res.json();
    return body.data || { };
  }
}
