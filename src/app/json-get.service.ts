import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class JsonGetService {

  constructor(private httpClient: HttpClient) { }

  public get(): string[] {
    var ans = this.httpClient.get('http://localhost:8080/data/get/1').subscribe
    (data => {
     console.log(data['data']);
    });
    return ans['data'];
  }

}
