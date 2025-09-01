import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';

import { OnDestroyDirective } from '../../../../directives/on-destroy.directive';
import { AuthService } from '../../../../services/auth/auth.service';
import { HoroscopeType } from '../../../../../modules/shared/models/horoscope.model';
import { IOption } from '../../../../../modules/shared/models/option.model';
import { getFormattedDateRange } from '../../../../../modules/shared/utils/dateUtils';
import { ISign } from '../../../../../modules/shared/models/sign.model';
import { SignsService } from '../../../../../modules/shared/services/signs/signs.service';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent extends OnDestroyDirective implements OnInit {
  readonly HoroscopeType = HoroscopeType;

  isUserLoggedIn = false;

  signsOptions: IOption[] = [];
  horoscopeOptions: IOption[] = [];

    constructor(
    private readonly signsService: SignsService,
    private readonly authService: AuthService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.isUserLoggedIn = Boolean(this.authService.getUser());

    this.horoscopeOptions = Object.entries(HoroscopeType).map(([key, value]) => ({
      id: key,
      value,
    }));
    
    this.signsService.getSigns().pipe(takeUntil(this.destroy$)).subscribe((signs: ISign[]) => {
      this.signsOptions = signs.map((sign) => ({
        id: sign.id,
        value: sign.signType,
        icon: sign.iconDir,
        info: `(${getFormattedDateRange(sign.startDate, sign.endDate)})`,
      }));
    })
  }
}
