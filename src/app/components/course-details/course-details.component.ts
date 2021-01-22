import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { CoursesResponse } from 'src/app/models/courses-response';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit{

  @Input() course: CoursesResponse;
  // @Output() onCheckboxClicked = new EventEmitter< {course: CoursesResponse, isChecked: boolean}>();

  isChecked: boolean = false;

  ngOnInit(): void {
  }

  public onClick(): void {
    this.isChecked = !this.isChecked;
      console.log("Kliknięto");
  }
}