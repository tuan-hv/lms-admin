import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaningDataTableComponent } from './replaning-data-table.component';

describe('ReplaningDataTableComponent', () => {
  let component: ReplaningDataTableComponent;
  let fixture: ComponentFixture<ReplaningDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaningDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaningDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
