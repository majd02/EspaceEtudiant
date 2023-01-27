import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningupdateComponent } from './planingupdate.component';

describe('PlaningupdateComponent', () => {
  let component: PlaningupdateComponent;
  let fixture: ComponentFixture<PlaningupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaningupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaningupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
