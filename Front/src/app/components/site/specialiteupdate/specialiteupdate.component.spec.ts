import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteupdateComponent } from './specialiteupdate.component';

describe('SpecialiteupdateComponent', () => {
  let component: SpecialiteupdateComponent;
  let fixture: ComponentFixture<SpecialiteupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiteupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialiteupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
