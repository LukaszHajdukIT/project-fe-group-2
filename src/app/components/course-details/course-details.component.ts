import { Component, OnInit } from '@angular/core';
import { CoursesResponse } from 'src/app/models/courses-response';
import { InqooApiService } from 'src/app/services/inqoo-api.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courses: CoursesResponse[];

  constructor(private service: InqooApiService) { }
  
  ngOnInit(): void {
    this.service.getAllCourses()
      .subscribe((data) => {
        this.courses = data;
      });
  }
}
