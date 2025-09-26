import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Category} from "../../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:7070/api/';

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'allCategories').pipe(
      map(
        response => response
      )
    )
  }

}
