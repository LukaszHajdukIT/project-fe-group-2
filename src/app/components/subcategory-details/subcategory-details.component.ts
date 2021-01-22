import { Component, Input, OnInit } from '@angular/core';
import { CourseEvent } from 'src/app/models/course-event';
import { CoursesResponse } from 'src/app/models/courses-response';
import { SubcategoriesResponse } from 'src/app/models/subcategories-response';
import { InqooApiService } from 'src/app/services/inqoo-api.service';

@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.scss']
})
export class SubcategoryDetailsComponent implements OnInit{

  @Input() subcategory: SubcategoriesResponse;

  courses: CoursesResponse[];

  checkedCourses: number[] = [];

  constructor(private inqooService: InqooApiService) {
  }

  onCheckboxClicked(event: CourseEvent): void{
    if(event.isChecked === true) this.checkedCourses.push(event.course.id);
    if(event.isChecked === false) this.checkedCourses = this.checkedCourses.filter( x => x !== event.course.id)

    console.log(this.checkedCourses);
  }

  ngOnInit() {
    this.inqooService.getAllCoursesForSubcategory(this.subcategory.id).subscribe(
      data => this.courses = data
    )
  }

}
