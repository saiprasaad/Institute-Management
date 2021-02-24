import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksdisplayComponent } from './marksdisplay.component';

describe('MarksdisplayComponent', () => {
  let component: MarksdisplayComponent;
  let fixture: ComponentFixture<MarksdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
