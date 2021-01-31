import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  private checkedCourses: number[] = [];

  constructor() { }

  handleCourseCheck(courseId: number, isChecked: boolean){
      if(isChecked === true) this.checkedCourses.push(courseId);
      if(isChecked === false) this.checkedCourses = this.checkedCourses.filter( id => id !== courseId)
  }

  getCheckedCourses(): number[]{
    return this.checkedCourses;
  }

  clearCoursesAfterSubmit(): void{
    for(let i = this.checkedCourses.length; i > 0; i--){
      this.checkedCourses.pop();
    }
    console.log(this.checkedCourses);
  }
}