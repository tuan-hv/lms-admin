import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccountSearchFormComponent } from './loan-account-search-form.component';

describe('LoanAccountSearchFormComponent', () => {
  let component: LoanAccountSearchFormComponent;
  let fixture: ComponentFixture<LoanAccountSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAccountSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccountSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
