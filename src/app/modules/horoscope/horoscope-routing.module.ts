import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HoroscopeComponent } from './horoscope/horoscope.component';
import { SignDetailsComponent } from './sign-details/sign-details.component';

const routes: Routes = [
  { path: '', component: HoroscopeComponent },
  { path: ':sign', component: SignDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoroscopeRoutingModule { }
