import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
  links: ILink[] = [
    { path: 'home', title: 'Home' },
    { path: 'offer', title: 'Offer' },
  ];
}

interface ILink {
  path: string;
  title: string;
}