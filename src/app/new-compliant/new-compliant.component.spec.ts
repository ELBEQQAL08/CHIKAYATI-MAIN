import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompliantComponent } from './new-compliant.component';

describe('NewCompliantComponent', () => {
  let component: NewCompliantComponent;
  let fixture: ComponentFixture<NewCompliantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCompliantComponent]
    });
    fixture = TestBed.createComponent(NewCompliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
