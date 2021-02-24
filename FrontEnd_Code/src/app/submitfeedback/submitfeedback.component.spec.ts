import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitfeedbackComponent } from './submitfeedback.component';

describe('SubmitfeedbackComponent', () => {
  let component: SubmitfeedbackComponent;
  let fixture: ComponentFixture<SubmitfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
