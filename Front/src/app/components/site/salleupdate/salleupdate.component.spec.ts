import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleupdateComponent } from './salleupdate.component';

describe('SalleupdateComponent', () => {
  let component: SalleupdateComponent;
  let fixture: ComponentFixture<SalleupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
