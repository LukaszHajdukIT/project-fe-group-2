import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesResponse } from 'src/app/models/courses-response';
import { CourseEvent } from 'src/app/models/course-event';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {

  @Input() course: CoursesResponse;
  @Output() onCheckboxClicked = new EventEmitter<CourseEvent>();

  isChecked: boolean = false;

  public onClick(): void {
    this.isChecked = !this.isChecked;
    this.onCheckboxClicked.emit({ course: this.course, isChecked: this.isChecked });
  }
}