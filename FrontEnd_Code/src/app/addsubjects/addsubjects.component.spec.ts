import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubjectsComponent } from './addsubjects.component';

describe('AddsubjectsComponent', () => {
  let component: AddsubjectsComponent;
  let fixture: ComponentFixture<AddsubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
