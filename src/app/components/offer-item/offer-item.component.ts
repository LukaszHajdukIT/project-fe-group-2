import { Component, Input, OnInit } from '@angular/core';
import { CategoriesResponse } from 'src/app/models/categories-response';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent {
 
  @Input() categories: CategoriesResponse[];
}
