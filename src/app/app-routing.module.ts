import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./modules/contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'horoscope/:type',
    loadChildren: () => import('./modules/horoscope/horoscope.module').then((m) => m.HoroscopeModule),
  },
  {
    path: '404',
    loadChildren: () => import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
