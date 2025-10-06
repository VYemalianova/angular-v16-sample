import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';

import { HoroscopeType } from '../../../../modules/shared/models/horoscope.model';
import { IOption } from '../../../../modules/shared/models/option.model';
import { ISign } from '../../../../modules/shared/models/sign.model';
import { SignsService } from '../../../../modules/shared/services/signs/signs.service';
import { getFormattedDateRange } from '../../../../modules/shared/utils/dateUtils';
import { OnDestroyDirective } from '../../../directives/on-destroy.directive';


@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent extends OnDestroyDirective implements OnInit {
  @Input({ required: true }) isUserLoggedIn!: boolean;

  readonly HoroscopeType = HoroscopeType;

  signsOptions: IOption[] = [];
  horoscopeOptions: IOption[] = [];

  constructor(private readonly signsService: SignsService) {
    super();
  }

  ngOnInit(): void {
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
