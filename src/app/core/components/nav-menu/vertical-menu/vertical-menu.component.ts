import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { takeUntil } from 'rxjs';

import { OnDestroyDirective } from '../../../directives/on-destroy.directive';
import { HoroscopeType } from '../../../../modules/shared/models/horoscope.model';
import { IOption } from '../../../../modules/shared/models/option.model';
import { SignsService } from '../../../../modules/shared/services/signs/signs.service';
import { getFormattedDateRange } from '../../../../modules/shared/utils/dateUtils';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent extends OnDestroyDirective implements OnInit, OnChanges {
  @Input({ required: true }) isMenuClosed!: boolean;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

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

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['isMenuClosed'].firstChange && changes['isMenuClosed'].currentValue) {
      this.accordion.closeAll();
    }
  }

  ngOnInit(): void {
    this.isUserLoggedIn = Boolean(this.authService.getUser());

    this.horoscopeOptions = Object.entries(HoroscopeType).map(([key, value]) => ({
      id: key,
      value,
    }));
    
    this.signsService.getSigns().pipe(takeUntil(this.destroy$)).subscribe((signs) => {
      this.signsOptions = signs.map((sign) => ({
        id: sign.id,
        value: sign.signType,
        icon: sign.iconDir,
        info: `(${getFormattedDateRange(sign.startDate, sign.endDate)})`,
      }));
    })
  }
}
