import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagnoexistsComponent } from './pagnoexists.component';

describe('PagnoexistsComponent', () => {
  let component: PagnoexistsComponent;
  let fixture: ComponentFixture<PagnoexistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagnoexistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagnoexistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
