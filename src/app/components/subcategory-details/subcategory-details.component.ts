import { Component, Input, OnInit } from '@angular/core';
import { CoursesResponse } from 'src/app/models/courses-response';
import { SubcategoriesResponse } from 'src/app/models/subcategories-response';
import { InqooApiService } from 'src/app/services/inqoo-api.service';

@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.scss']
})
export class SubcategoryDetailsComponent {

  @Input() subcategories: SubcategoriesResponse[];

  @Input() courses: CoursesResponse[];
}
