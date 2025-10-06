import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HoroscopeType } from '../../shared/models/horoscope.model';

@Component({
  selector: 'app-sign-details',
  templateUrl: './sign-details.component.html',
  styleUrls: ['./sign-details.component.scss']
})
export class SignDetailsComponent {
  horoscopeType!: HoroscopeType;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.horoscopeType = params.get('type') as HoroscopeType;
    });     
  }
}
