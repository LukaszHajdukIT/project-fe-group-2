import { Component, OnInit } from '@angular/core';
import { InqooApiService } from 'src/app/services/inqoo-api.service';
import { CategoriesResponse } from '../../models/categories-response';

@Component({
  selector: 'app-offer-content',
  templateUrl: './offer-content.component.html',
  styleUrls: ['./offer-content.component.scss']
})
export class OfferContentComponent implements OnInit{
  categories: CategoriesResponse[];

  constructor(private service: InqooApiService) { }

  ngOnInit(): void {
    this.service.getAllCategories()
      .subscribe((data) => {
        this.categories = data;
      });
  }
}
