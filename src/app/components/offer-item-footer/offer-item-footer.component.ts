import { Component } from '@angular/core';
import { SubmitService } from '../../services/submit.service'

@Component({
  selector: 'app-offer-item-footer',
  templateUrl: './offer-item-footer.component.html',
  styleUrls: ['./offer-item-footer.component.scss']
})
export class OfferItemFooterComponent {

  isMailValid: boolean = true;

  constructor(private submitService: SubmitService) { }

  public onSubmitClick(): void {
    this.submitService.submitHandler();
  }

  onInputValueChange(value: string) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(value)) {
      this.isMailValid = false;
    }
    else {
      this.isMailValid = true;
      this.submitService.setEmail(value);
    }
  }
}