import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';

import { ISign } from '../../models/sign.model';
import { SignsService } from '../../services/signs/signs.service';
import { OnDestroyDirective } from '../../../../core/directives/on-destroy.directive';
import { HoroscopeType } from '../../models/horoscope.model';
import { getFormattedDateRange } from '../../utils/dateUtils';

@Component({
  selector: 'app-signs-banner',
  templateUrl: './signs-banner.component.html',
  styleUrls: ['./signs-banner.component.scss']
})
export class SignsBannerComponent extends OnDestroyDirective implements OnInit {
  @Input({ required: true }) type!: HoroscopeType;
  @Input() isHeaderHidden?: boolean;
  @Input() date?: Date;

  signs!: ISign[];

  constructor(private readonly signsService: SignsService) {
    super();
  }

  ngOnInit(): void {
    this.signsService.getSignList().pipe(takeUntil(this.destroy$)).subscribe((signs: ISign[]) => {
      this.signs = signs;
    })
  }

  getDateRange(startDate: string, endDate: string): string {
    return getFormattedDateRange(startDate, endDate)
  }
}
