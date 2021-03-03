import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentScheduleDataTableComponent } from './payment-schedule-data-table.component';

describe('PaymentScheduleDataTableComponent', () => {
  let component: PaymentScheduleDataTableComponent;
  let fixture: ComponentFixture<PaymentScheduleDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentScheduleDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentScheduleDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
