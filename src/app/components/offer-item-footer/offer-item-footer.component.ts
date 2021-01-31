import { Component, OnInit } from '@angular/core';
import { SubmitService } from '../../services/submit.service'

@Component({
  selector: 'app-offer-item-footer',
  templateUrl: './offer-item-footer.component.html',
  styleUrls: ['./offer-item-footer.component.scss']
})
export class OfferItemFooterComponent implements OnInit {

  constructor(private SubmitService: SubmitService){}
   
  ngOnInit(): void {
  }

  public onSubmitClick(): void{
    console.log('click');
  }
}
