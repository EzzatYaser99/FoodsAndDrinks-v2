import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Country} from "../../model/country";
import { HttpClient } from "@angular/common/http";
import {State} from "../../model/state";

@Injectable({
  providedIn: 'root'
})
export class StateCountryService {
  baseUrl = 'http://localhost:7070/api/';

  constructor(private http: HttpClient) {
  }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl + 'countries').pipe(
      map(
        response => response
      )
    );
  }

  getAllStates(): Observable<State[]> {
    return this.http.get<State[]>(this.baseUrl + 'states').pipe(
      map(
        response => response
      )
    );
  }

  getStatesByCode(code: String): Observable<State[]> {
    return this.http.get<State[]>(this.baseUrl + 'statescode?code=' + code).pipe(
      map(
        data => data
      )
    );
  }

}
