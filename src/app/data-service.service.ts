import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {


  constructor(private url: string, private http: Http) {
  }
  getData() {
    return this.http.get(this.url).map(response => response.json());
  }
}



