import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    LogoComponent,
    AvatarComponent,
  ]
})
export class SharedModule { }
