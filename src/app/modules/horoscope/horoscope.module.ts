import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoroscopeRoutingModule } from './horoscope-routing.module';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { HoroscopeDetailsComponent } from './horoscope-details/horoscope-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HoroscopeComponent,
    HoroscopeDetailsComponent
  ],
  imports: [
    CommonModule,
    HoroscopeRoutingModule,
    SharedModule
  ]
})
export class HoroscopeModule { }
