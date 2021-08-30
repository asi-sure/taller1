import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteslisComponent } from './docenteslis.component';

describe('DocenteslisComponent', () => {
  let component: DocenteslisComponent;
  let fixture: ComponentFixture<DocenteslisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteslisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteslisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
