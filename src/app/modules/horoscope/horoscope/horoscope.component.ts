import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HoroscopeType } from '../../shared/models/horoscope.model';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.scss']
})
export class HoroscopeComponent implements OnInit {
  horoscopeType!: HoroscopeType;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.horoscopeType = params.get('type') as HoroscopeType;
    });     
  }
}
