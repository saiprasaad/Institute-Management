import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackcountComponent } from './feedbackcount.component';

describe('FeedbackcountComponent', () => {
  let component: FeedbackcountComponent;
  let fixture: ComponentFixture<FeedbackcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
