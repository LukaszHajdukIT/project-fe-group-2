import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesResponse } from '../models/courses-response';
import { CategoriesResponse } from '../models/categories-response';
import { SubcategoriesResponse } from '../models/subcategories-response';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InqooApiService {

  constructor(private http: HttpClient) { }

  //TODO - export baseUrl to enviroment.ts
  private coursesUrl = 'http://localhost:8080/courses';
  private categoryUrl = 'http://localhost:8080/category';
  private subcategoryUrl = 'http://localhost:8080/subcategory';


  getAllCategories(): Observable<CategoriesResponse[]> {
    return this.http.get<CategoriesResponse[]>(this.categoryUrl);
  }

  getAllSubcategories(): Observable<SubcategoriesResponse[]> {
    return this.http.get<SubcategoriesResponse[]>(this.subcategoryUrl);
  }

  getSubcategoriesForCategory(categoryName: string): Observable<SubcategoriesResponse[]> {
    console.log('categoryName', categoryName);
    return this.http.get<SubcategoriesResponse[]>(this.subcategoryUrl);
  }

  getAllCourses(): Observable<CoursesResponse[]> {
    return this.http.get<CoursesResponse[]>(this.coursesUrl);
  }
}
