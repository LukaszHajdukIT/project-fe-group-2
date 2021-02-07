import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesResponse } from '../models/courses-response';
import { InqooApiService } from './inqoo-api.service';
@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  private checkedCourses: number[] = [];

  private email: string;

  allCourses: CoursesResponse[];

  constructor(private router: Router, private api: InqooApiService) { }

  handleCourseCheck(courseId: number, isChecked: boolean) {
    if (isChecked === true) this.checkedCourses.push(courseId);
    if (isChecked === false) this.checkedCourses = this.checkedCourses.filter(id => id !== courseId)
  }

  submitHandler() {
    this.api.sendMail(this.checkedCourses, this.email).subscribe(
      success => {
        this.goToSummary();
      },
      error => {
        console.log("error")
      }
    );
  }

  setEmail(email: string) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  getCheckedCourses() {
    return this.checkedCourses;
  }

  appendAllCourses(allCourses: CoursesResponse[]) {
    const coursesSet = new Set(this.allCourses);
    allCourses.forEach(course => coursesSet.add(course));

    this.allCourses = Array.from(coursesSet);
  }

  getAllCourses() {
    return this.allCourses;
  }

  clearCoursesAfterSubmit(): void {
    this.checkedCourses = [];
    this.allCourses = [];
  }

  private goToSummary() {
    this.router.navigate(['summary']);
  }
}