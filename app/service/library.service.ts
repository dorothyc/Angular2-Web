import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Library} from "./library";

@Injectable()
export class LibraryService {
  constructor(private http: Http){ }

  //private dataurl = 'http://localhost:4000/data';
  //private dataurl = 'app/libraries';
  private dataurl_database = 'http://localhost:8080/pending_db';
  private dataurl_local = 'http://localhost:8080/pending_local';

  getLibraryFromDatabase(): Observable<Library[]> {
    return this.http.get(this.dataurl_database)
               .map(data => data.json())
               .catch(this.handleError);
  }

  getLibraryFromLocal(): Observable<Library[]> {
    return this.http.get(this.dataurl_local)
      .map(data => data.json())
      .catch(this.handleError);
  }


  updateLibrary(id:number, comments: string): Observable<Library[]> {
    let body = JSON.stringify( {id, comments} );
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.dataurl_database, body, options)
      .map(data => data.json())
      .catch(this.handleError);
  }


  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure...
    let errorMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }
}
