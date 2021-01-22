import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursesResponse } from 'src/app/models/courses-response';
import { CourseEvent } from 'src/app/models/course-event';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit{

  @Input() course: CoursesResponse;
  @Output() onCheckboxClicked = new EventEmitter< CourseEvent >();

  isChecked: boolean = false;
  
  constructor(){
    
  }
  ngOnInit(): void {
  }

  public onClick(): void {
    this.isChecked = !this.isChecked;
      this.onCheckboxClicked.emit({course: this.course, isChecked: this.isChecked});
  }
}