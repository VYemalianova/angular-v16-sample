import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorInterceptor } from './services/http-interceptor/http-interceptor.interceptor';
import { SharedModule } from '../modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HorizontalMenuComponent } from './components/header/nav-menu/horizontal-menu/horizontal-menu.component';
import { MenuItemComponent } from './components/header/nav-menu/menu-item/menu-item.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HorizontalMenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    HorizontalMenuComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }
  ]
})
export class CoreModule { }
