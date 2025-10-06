import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoroscopeRoutingModule } from './horoscope-routing.module';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { SignDetailsComponent } from './sign-details/sign-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HoroscopeComponent,
    SignDetailsComponent
  ],
  imports: [
    CommonModule,
    HoroscopeRoutingModule,
    SharedModule
  ]
})
export class HoroscopeModule { }
