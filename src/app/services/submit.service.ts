import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InqooApiService } from './inqoo-api.service';
@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  private checkedCourses: number[] = [];

  private email: string;

  constructor(private router: Router, private api: InqooApiService) { }

  handleCourseCheck(courseId: number, isChecked: boolean) {
    if (isChecked === true) this.checkedCourses.push(courseId);
    if (isChecked === false) this.checkedCourses = this.checkedCourses.filter(id => id !== courseId)
  }

  submitHandler() {
    this.api.sendMail(this.checkedCourses, this.email).subscribe(
      success => {
        console.log('success', success)

        this.clearCoursesAfterSubmit();
        this.goToSummary();
      },
      error => {
        console.log('error', error)
      }
    );
  }

  setEmail(email: string) {
    this.email = email;
  }

  private clearCoursesAfterSubmit(): void {
    this.checkedCourses = [];
  }

  private goToSummary() {
    this.router.navigate(['summary']);
  }
}