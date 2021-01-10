import { Component, OnInit } from '@angular/core';
import { InqooApiService } from 'src/app/services/inqoo-api.service';
import { CoursesResponse} from '../../models/courses-response';

@Component({
  selector: 'app-offer-content',
  templateUrl: './offer-content.component.html',
  styleUrls: ['./offer-content.component.scss']
})
export class OfferContentComponent {
  courses: CoursesResponse[];

  constructor(private service: InqooApiService) { }
  
  ngOnInit(): void {
    this.service.getAllCourses()
      .subscribe((data) => {
        this.courses = data;
      });
  }
}