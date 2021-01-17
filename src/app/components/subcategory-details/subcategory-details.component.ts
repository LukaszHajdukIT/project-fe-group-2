import { Component, Input, OnInit } from '@angular/core';
import { SubcategoriesResponse } from 'src/app/models/subcategories-response';
import { InqooApiService } from 'src/app/services/inqoo-api.service';

@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.scss']
})
export class SubcategoryDetailsComponent implements OnInit{

  @Input() subcategory: SubcategoriesResponse

  constructor(private inqooService: InqooApiService) {
  }

  ngOnInit() {
    //TODO load courses for specific subcategory
  }
}
