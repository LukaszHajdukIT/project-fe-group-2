import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcategoriesResponse } from 'src/app/models/subcategories-response';
import { InqooApiService } from '../../services/inqoo-api.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit{

  // TODO add proper type here
  subcategories: any;

  constructor(
    private route: ActivatedRoute,
    private inqooService: InqooApiService,
  ) {}

  ngOnInit() {
    this.route.queryParams.pipe(
      switchMap(params => this.inqooService.getSubcategoriesForCategory(params['name']))
    ).subscribe(subcategories => {
      this.subcategories = subcategories;
      console.log('subcategories', subcategories)
    });
  }
}
