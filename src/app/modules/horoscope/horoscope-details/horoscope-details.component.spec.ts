import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeDetailsComponent } from './horoscope-details.component';

describe('HoroscopeDetailsComponent', () => {
  let component: HoroscopeDetailsComponent;
  let fixture: ComponentFixture<HoroscopeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoroscopeDetailsComponent]
    });
    fixture = TestBed.createComponent(HoroscopeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
