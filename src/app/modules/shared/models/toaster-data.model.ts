import { TemplateRef } from '@angular/core';

import { ToastNotificationType } from '../../../core/models/notification-type.enum';

export interface IToasterData {
  type: ToastNotificationType;
  title: string;
  details?: string;
  duration?: number;
  template?: TemplateRef<HTMLElement>;
}
