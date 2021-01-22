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
      console.log(this.checkedCourses)
  }

  getCheckedCourses(): number[]{
    return this.checkedCourses;
  }
}


