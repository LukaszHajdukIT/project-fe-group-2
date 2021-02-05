import { Component, OnDestroy } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';

@Component({
  selector: 'app-offer-summary',
  templateUrl: './offer-summary.component.html',
  styleUrls: ['./offer-summary.component.scss']
})
export class OfferSummaryComponent implements OnDestroy{
  constructor(private submitService: SubmitService){

  }
  ngOnDestroy(): void {
    this.submitService.clearCoursesAfterSubmit();
  }
}
