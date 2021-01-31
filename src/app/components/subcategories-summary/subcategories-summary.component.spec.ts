import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesSummaryComponent } from './subcategories-summary.component';

describe('SubcategoriesSummaryComponent', () => {
  let component: SubcategoriesSummaryComponent;
  let fixture: ComponentFixture<SubcategoriesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoriesSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
