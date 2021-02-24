import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackcountadminComponent } from './feedbackcountadmin.component';

describe('FeedbackcountadminComponent', () => {
  let component: FeedbackcountadminComponent;
  let fixture: ComponentFixture<FeedbackcountadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackcountadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackcountadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
