import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoroscopeRoutingModule } from './horoscope-routing.module';
import { SignDetailsComponent } from './sign-details/sign-details.component';


@NgModule({
  declarations: [
    SignDetailsComponent
  ],
  imports: [
    CommonModule,
    HoroscopeRoutingModule
  ]
})
export class HoroscopeModule { }
