import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplanInformationComponent } from './replan-information.component';

describe('ReplanInformationComponent', () => {
  let component: ReplanInformationComponent;
  let fixture: ComponentFixture<ReplanInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplanInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplanInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
