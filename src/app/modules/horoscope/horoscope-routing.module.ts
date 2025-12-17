import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HoroscopeComponent } from './horoscope/horoscope.component';
import { HoroscopeDetailsComponent } from './horoscope-details/horoscope-details.component';

const routes: Routes = [
  { path: '', component: HoroscopeComponent },
  { path: ':sign', component: HoroscopeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoroscopeRoutingModule { }
