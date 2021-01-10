import { Component, Input, OnInit } from '@angular/core';
import { SubcategoriesResponse } from 'src/app/models/subcategories-response';

@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.scss']
})
export class SubcategoryDetailsComponent {

  @Input() subcategories: SubcategoriesResponse[];
  
}
