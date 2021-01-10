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

  private baseUrl = 'http://localhost:8080';

  getAllCategories(): Observable<CategoriesResponse[]> {
    return this.http.get<CategoriesResponse[]>(`${this.baseUrl}/category`);
  }

  getAllSubcategories(): Observable<SubcategoriesResponse[]> {
    return this.http.get<SubcategoriesResponse[]>(`${this.baseUrl}/subcategory`);
  }

  getSubcategoriesForCategory(categoryName: string): Observable<SubcategoriesResponse[]> {
    console.log('categoryName', categoryName);
    return this.http.get<SubcategoriesResponse[]>(`${this.baseUrl}/subcategory`);
  }

  getAllCourses(): Observable<CoursesResponse[]> {
    return this.http.get<CoursesResponse[]>(`${this.baseUrl}/courses`);
  }
}
