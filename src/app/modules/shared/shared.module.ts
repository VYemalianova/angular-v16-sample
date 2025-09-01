import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { LogoComponent } from './components/logo/logo.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [
    LogoComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    LogoComponent,
    AvatarComponent,
  ]
})
export class SharedModule { }
