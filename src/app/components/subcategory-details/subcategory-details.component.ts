import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private inqooService: InqooApiService) {
  }

  onCheckboxClicked(event): void{
    console.log("klik", event);
  }

  ngOnInit() {
    this.inqooService.getAllCoursesForSubcategory(this.subcategory.id).subscribe(
      data => this.courses = data
    )
  }

}
