import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthModalComponent } from '../auth/auth-modal/auth-modal.component';

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

  constructor(private readonly dialog: MatDialog) {}

  onSignin(): void {
    this.dialog.open(AuthModalComponent, {
      width: '600px',
      disableClose: true,
    })
  }

  onLivePsychics(): void {}
}
