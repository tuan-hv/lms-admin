import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplanningSearchFormComponent } from './replanning-search-form.component';

describe('ReplanningSearchFormComponent', () => {
  let component: ReplanningSearchFormComponent;
  let fixture: ComponentFixture<ReplanningSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplanningSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplanningSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
