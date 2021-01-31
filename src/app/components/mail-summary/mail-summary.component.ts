import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';

@Component({
  selector: 'app-mail-summary',
  templateUrl: './mail-summary.component.html',
  styleUrls: ['./mail-summary.component.scss']
})
export class MailSummaryComponent implements OnInit{

  constructor(private submitService: SubmitService) { }
  email: string;
 
  showEmailInSummary(){
    this.email = this.submitService.getEmail();
  }
  ngOnInit(){
    this.showEmailInSummary()
  }
}