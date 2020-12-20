import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-content',
  templateUrl: './offer-content.component.html',
  styleUrls: ['./offer-content.component.scss']
})
export class OfferContentComponent{
  categories: [{title: "title"}];

  links: ILink [] = [
    { path: 'Sales', title: 'IT' },
    { path: 'offer', title: 'Offer' },
  ];
}

interface ILink {
 path: string;
 title: string; 
}

