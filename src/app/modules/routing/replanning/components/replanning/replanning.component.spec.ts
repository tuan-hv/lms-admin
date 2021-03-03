import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplanningComponent } from './replanning.component';

describe('ReplanningComponent', () => {
  let component: ReplanningComponent;
  let fixture: ComponentFixture<ReplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
