import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSummaryComponent } from './courses-summary.component';

describe('CoursesSummaryComponent', () => {
  let component: CoursesSummaryComponent;
  let fixture: ComponentFixture<CoursesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
