import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthModalComponent } from '../auth/auth-modal/auth-modal.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({ required: true }) isMobile!: boolean;
  @Input({ required: true }) isUserLoggedIn!: boolean;
  @Input({ required: true }) isMenuOpened!: boolean;
  @Output() menuToggle = new EventEmitter<void>();

  constructor(
    private readonly dialog: MatDialog,
    private readonly authService: AuthService,
  ) {}

  onSignin(): void {
    this.dialog.open(AuthModalComponent, {
      width: '600px',
      disableClose: true,
    });
  }

  onSignout(): void {
    this.authService.clearAuthData();
  }

  onLivePsychics(): void {}
}
