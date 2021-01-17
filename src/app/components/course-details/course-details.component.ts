import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesResponse } from 'src/app/models/courses-response';
import { InqooApiService } from 'src/app/services/inqoo-api.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courses: CoursesResponse[];

  constructor(
    private inqooService: InqooApiService,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit() {
    this.route.queryParams.pipe(
      switchMap(params => this.inqooService.getAllCoursesForSubcategory(params['id']))
    ).subscribe(courses => {
      this.courses = courses;
      console.log('courses', courses)
    });
  }
}
