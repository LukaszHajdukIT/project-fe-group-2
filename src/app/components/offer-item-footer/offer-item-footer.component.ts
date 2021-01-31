import { Component } from '@angular/core';
import { SubmitService } from '../../services/submit.service'

@Component({
  selector: 'app-offer-item-footer',
  templateUrl: './offer-item-footer.component.html',
  styleUrls: ['./offer-item-footer.component.scss']
})
export class OfferItemFooterComponent {

  constructor(private SubmitService: SubmitService){}

  public onSubmitClick(): void{
    console.log('click');
  }
}
