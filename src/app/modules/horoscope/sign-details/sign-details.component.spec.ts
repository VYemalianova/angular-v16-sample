import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDetailsComponent } from './sign-details.component';

describe('SignDetailsComponent', () => {
  let component: SignDetailsComponent;
  let fixture: ComponentFixture<SignDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignDetailsComponent]
    });
    fixture = TestBed.createComponent(SignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
