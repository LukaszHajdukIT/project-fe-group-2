import { Injectable } from '@angular/core';
import { CoursesResponse } from '../models/courses-response';
import { CategoriesResponse } from '../models/categories-response';
import { SubcategoriesResponse } from '../models/subcategories-response';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InqooApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  getAllCategories(): Observable<CategoriesResponse[]> {
    return this.http.get<CategoriesResponse[]>(`${this.baseUrl}/category`);
  }

  getAllSubcategoriesForCategory(subcategoryId: number): Observable<SubcategoriesResponse[]> {
    return this.http.get<SubcategoriesResponse[]>(`${this.baseUrl}/subcategory/${subcategoryId}`);
  }

  getAllCourses(): Observable<CoursesResponse[]> {
    return this.http.get<CoursesResponse[]>(`${this.baseUrl}/courses`);
  }
}
