import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainFormComponent } from './complain-form.component';

describe('ComplainFormComponent', () => {
  let component: ComplainFormComponent;
  let fixture: ComponentFixture<ComplainFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplainFormComponent]
    });
    fixture = TestBed.createComponent(ComplainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
