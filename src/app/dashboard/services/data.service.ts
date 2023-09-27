import { Injectable } from '@angular/core';
import { children, kindergardens } from '../../shared/util/data';
import { Observable, of } from 'rxjs';
import { Kindergarden } from '../models/kindergarden.model';
import { Child } from '../models/child.model';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getKindergardens(): Observable<Kindergarden[]> {
    return this.http.get<Kindergarden[]>(BASE_URL + '/kindergardens');
  }

  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(BASE_URL + '/childs');
  }

  createChild(child: Child): Observable<any> {
    return this.http.post(BASE_URL + '/childs', child);
  }
}
