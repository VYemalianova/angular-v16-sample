import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorInterceptor } from './services/http-interceptor/http-interceptor.interceptor';
import { SharedModule } from '../modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { HorizontalMenuComponent } from './components/nav-menu/horizontal-menu/horizontal-menu.component';
import { MenuItemComponent } from './components/nav-menu/menu-item/menu-item.component';
import { VerticalMenuComponent } from './components/nav-menu/vertical-menu/vertical-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HorizontalMenuComponent,
    MenuItemComponent,
    VerticalMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    FooterComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }
  ]
})
export class CoreModule { }
