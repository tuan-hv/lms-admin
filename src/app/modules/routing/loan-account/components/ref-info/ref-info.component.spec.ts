import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefInfoComponent } from './ref-info.component';

describe('RefInfoComponent', () => {
  let component: RefInfoComponent;
  let fixture: ComponentFixture<RefInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
