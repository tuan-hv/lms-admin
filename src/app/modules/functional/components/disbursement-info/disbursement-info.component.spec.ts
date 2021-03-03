import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementInfoComponent } from './disbursement-info.component';

describe('DisbursementInfoComponent', () => {
  let component: DisbursementInfoComponent;
  let fixture: ComponentFixture<DisbursementInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisbursementInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisbursementInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
