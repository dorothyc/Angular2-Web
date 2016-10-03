import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Person} from "./person";

@Injectable()
export class PersonService {
  constructor(private http: Http){ }

  //private dataurl = 'http://localhost:4000/data';
  //private dataurl = 'app/persons';
  private dataurl_database = 'http://localhost:8080/pendings';
  private dataurl_local = 'http://localhost:8080/pendingstwo';

  getPersonFromDatabase(): Observable<Person[]> {
    console.log("Now in getPerson Service: ");
    console.log("this is http get: ");
    console.log(JSON.stringify(this.http.get(this.dataurl_database)));

    console.log("this is JSON: ");
    //JSON.parse(JSON.stringify(this.http.get(this.dataurl).map(this.extractData), function(k, v){console.log(v)});

    return this.http.get(this.dataurl_database)
               .map(data => data.json())
               .catch(this.handleError);
  }

  getPersonFromLocal(): Observable<Person[]> {
    console.log("Now in getPerson Service: ");
    console.log("this is http get: ");
    console.log(JSON.stringify(this.http.get(this.dataurl_database)));

    console.log("this is JSON: ");
    //JSON.parse(JSON.stringify(this.http.get(this.dataurl).map(this.extractData), function(k, v){console.log(v)});

    return this.http.get(this.dataurl_local)
      .map(data => data.json())
      .catch(this.handleError);
  }


  updatePerson(id:number, name: string): Observable<Person[]> {
    console.log("Now in updatePerson Service: ");
    let body = JSON.stringify( {id, name} );
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    //test
    console.log("this is body: " + body);
    console.log("this is http post: ");
    console.log(this.http.post(this.dataurl_database, body, options));

    return this.http.post(this.dataurl_database, body, options)
      .map(data => data.json())
      .catch(this.handleError);
  }



  private extractData(res: Response){
    console.log("this is res: ");
    console.log(JSON.stringify(res));

    let body = res.json();

    /*
    console.log("this is JSON: ");
    JSON.parse(JSON.stringify(body[0]), function(k, v){
       if(k === "name") console.log(v)
    });
    */

    let obj = res.json();
    let status = obj[0].nickname[1].three;
    console.log("status: ");
    console.log(status);
    //test
    //console.log("this is res.json: ");
    //console.log(JSON.stringify(obj[0]));

    return body || { };
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure...
    let errorMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
