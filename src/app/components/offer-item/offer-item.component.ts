import { Component, Input, OnInit } from '@angular/core';
import { CoursesResponse } from 'src/app/models/courses-response';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent {
 
  @Input() courses: CoursesResponse[];
  
}
