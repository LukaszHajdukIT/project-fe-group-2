import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursesResponse } from 'src/app/models/courses-response';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit{

  @Input() course: CoursesResponse;
  @Output() onCheckboxClicked = new EventEmitter< {course: CoursesResponse, isChecked: boolean} >();

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