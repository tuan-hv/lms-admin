import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentScheduleSearchFormComponent } from './payment-schedule-search-form.component';

describe('PaymentScheduleSearchFormComponent', () => {
  let component: PaymentScheduleSearchFormComponent;
  let fixture: ComponentFixture<PaymentScheduleSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentScheduleSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentScheduleSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
