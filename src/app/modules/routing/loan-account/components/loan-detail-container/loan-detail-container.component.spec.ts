import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailContainerComponent } from './loan-detail-container.component';

describe('LoanDetailContainerComponent', () => {
  let component: LoanDetailContainerComponent;
  let fixture: ComponentFixture<LoanDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanDetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
