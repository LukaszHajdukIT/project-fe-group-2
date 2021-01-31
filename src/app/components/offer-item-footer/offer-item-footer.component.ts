import { Component } from '@angular/core';
import { SubmitService } from '../../services/submit.service'

@Component({
  selector: 'app-offer-item-footer',
  templateUrl: './offer-item-footer.component.html',
  styleUrls: ['./offer-item-footer.component.scss']
})
export class OfferItemFooterComponent {


  constructor(private submitService: SubmitService) { }

  public onSubmitClick(): void {
    this.submitService.submitHandler();
  }

  onInputValueChange(value: string){
    this.submitService.setEmail(value);
  }
}
