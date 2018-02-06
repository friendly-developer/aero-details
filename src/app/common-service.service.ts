import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonServiceService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) { }

  getRequest(url): Observable<any> {
    return this.http
      .get(url)
      .map(response => response.json())
      .catch(response => {
        return Observable.throw(response.json());
      });

  }

}
