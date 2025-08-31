import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({ required: true }) isMobile!: boolean;
  @Input({ required: true }) isMenuOpened!: boolean;
  @Output() menuToggle = new EventEmitter<void>();

  onSignin(): void {}

  onLivePsychics(): void {}
}
