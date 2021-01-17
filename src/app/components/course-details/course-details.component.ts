import { Component, Input } from '@angular/core';
import { CoursesResponse } from 'src/app/models/courses-response';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  @Input() course: CoursesResponse;
}
