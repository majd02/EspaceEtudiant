import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatspecComponent } from './matspec.component';

describe('MatspecComponent', () => {
  let component: MatspecComponent;
  let fixture: ComponentFixture<MatspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatspecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
