import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignsBannerComponent } from './signs-banner.component';

describe('SignsBannerComponent', () => {
  let component: SignsBannerComponent;
  let fixture: ComponentFixture<SignsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignsBannerComponent]
    });
    fixture = TestBed.createComponent(SignsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
