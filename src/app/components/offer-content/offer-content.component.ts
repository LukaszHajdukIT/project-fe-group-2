import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-content',
  templateUrl: './offer-content.component.html',
  styleUrls: ['./offer-content.component.scss']
})
export class OfferContentComponent{
  offerItems: ILink [] = [
    { path: 'IT', title: 'IT' },
    { path: 'sales', title: 'Sales' },
    { path: 'marketing', title: 'Marketing' },
    { path: 'other', title: 'Other' },
  ];
}

interface ILink {
 path: string;
 title: string; 
}

