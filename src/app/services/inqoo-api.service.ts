import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesResponse } from '../models/courses-response';
import { CategoriesResponse } from '../models/categories-response';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InqooApiService {

  constructor(private http: HttpClient) { }

  //TODO - export baseUrl to enviroment.ts
  private coursesUrl = 'http://localhost:8080/courses';
  private categoryUrl = 'http://localhost:8080/category';

  getAllCourses(): Observable<CoursesResponse[]> {
    return this.http.get<CoursesResponse[]>(this.coursesUrl);
  }

  getAllCategories(): Observable<CategoriesResponse[]> {
    return this.http.get<CategoriesResponse[]>(this.categoryUrl);
  }

}
