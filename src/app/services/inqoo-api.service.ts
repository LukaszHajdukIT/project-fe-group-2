import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesResponse } from '../models/courses-response';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InqooApiService {

  constructor(private http: HttpClient) { }

  //TODO - export baseUrl to enviroment.ts
  private baseUrl = 'http://localhost:8080/courses';

  getAllCourses(): Observable<CoursesResponse[]> {
    return this.http.get<CoursesResponse[]>(this.baseUrl);
  }

}
