import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplanningReviewComponent } from './replanning-review.component';

describe('ReplanningReviewComponent', () => {
  let component: ReplanningReviewComponent;
  let fixture: ComponentFixture<ReplanningReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplanningReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplanningReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
