import { Component, Input, OnInit } from '@angular/core';
import { CoursesResponse } from 'src/app/models/courses-response';
import { SubmitService } from 'src/app/services/submit.service';

@Component({
  selector: 'app-courses-summary',
  templateUrl: './courses-summary.component.html',
  styleUrls: ['./courses-summary.component.scss']
})
export class CoursesSummaryComponent implements OnInit {

  checkedCourses: CoursesResponse[];

  constructor(private submitService: SubmitService) { }

  ngOnInit(): void {
    this.checkedCourses = this.getCheckedCourses();
  }
  getCheckedCourses(): CoursesResponse[] {
    const checkedIds = this.submitService.getCheckedCourses();
    const allCourses = this.submitService.getAllCourses();

    const checkedCourses = allCourses.filter(course => {
      const find = checkedIds.find(id => id === course.id);
      return find !== undefined;
    });


    return checkedCourses;
  }
}
