import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, map, switchMap, takeUntil } from 'rxjs';

import { HoroscopeType, IHoroscope } from '../../shared/models/horoscope.model';
import { OnDestroyDirective } from '../../../core/directives/on-destroy.directive';
import { HoroscopeService } from '../../shared/services/horoscope/horoscope.service';
import { SignsService } from '../../shared/services/signs/signs.service';
import { DateFormat } from '../../shared/models/date.types';
import { ISign, SignType } from '../../shared/models/sign.model';
import { getFormattedDateRange } from '../../shared/utils/dateUtils';

@Component({
  selector: 'app-horoscope-details',
  templateUrl: './horoscope-details.component.html',
  styleUrls: ['./horoscope-details.component.scss']
})
export class HoroscopeDetailsComponent extends OnDestroyDirective {
  horoscope!: IHoroscope & { dateRange: string} ;
  sign!: ISign;

  readonly HoroscopeType = HoroscopeType;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly horoscopeService: HoroscopeService,
    private readonly signsService: SignsService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map(params => ({type: params.get('type') as HoroscopeType, sign: params.get('sign') as SignType})),
        switchMap(({ type, sign }) => {
          return forkJoin([
            this.horoscopeService.getHoroscopeDetails(type, sign),
            this.signsService.getSign(sign)
          ]);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(([horoscope, sign]) => {
        this.horoscope = {
          ...horoscope,
          dateRange: getFormattedDateRange(horoscope.startDate, horoscope.endDate, DateFormat.FullDayDate),
        };
        this.sign = sign;
      });     
  }
}
