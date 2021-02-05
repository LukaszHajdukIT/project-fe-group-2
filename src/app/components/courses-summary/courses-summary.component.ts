import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';

@Component({
  selector: 'app-courses-summary',
  templateUrl: './courses-summary.component.html',
  styleUrls: ['./courses-summary.component.scss']
})
export class CoursesSummaryComponent implements OnInit {
  
  checkedCourses: number[];

  constructor(private submitService: SubmitService){}

  ngOnInit(): void {
    this.getCheckedCourses();
    console.log(this.submitService.getAllCourses());
  }
  getCheckedCourses(){
    this.checkedCourses = this.submitService.getCheckedCourses();
  }
}
