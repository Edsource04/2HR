import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationFormComponent } from './request-form.component';

describe('RequestFormComponent', () => {
  let component: VacationFormComponent;
  let fixture: ComponentFixture<VacationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
