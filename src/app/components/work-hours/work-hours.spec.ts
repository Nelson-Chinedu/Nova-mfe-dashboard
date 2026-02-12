import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHours } from './work-hours';

describe('WorkHours', () => {
  let component: WorkHours;
  let fixture: ComponentFixture<WorkHours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkHours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkHours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
