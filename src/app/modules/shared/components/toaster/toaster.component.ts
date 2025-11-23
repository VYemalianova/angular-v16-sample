import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { IToasterData } from '../../models/toaster-data.model';
import { ToastNotificationType } from '../../../../core/models/notification-type.enum';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  icon!: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: IToasterData & { close: () => void; },
  ) {}

  ngOnInit(): void {
    this.icon = this.defineIcon();
  }

  private defineIcon(): string {
    switch (this.data.type) {
      case ToastNotificationType.Error:
        return 'error';
      case ToastNotificationType.Success:
        return 'check_circle';
      case ToastNotificationType.Info:
        return 'info'
      case ToastNotificationType.Warn:
        return 'warning';
      default:
        return 'warning';
    }
  }
}
