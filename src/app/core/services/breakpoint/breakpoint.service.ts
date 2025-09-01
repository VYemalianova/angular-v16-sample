import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

const MIN_COMPATIBLE_WIDTH = '1000px';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  isMobile$: Observable<boolean>;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver
      .observe([`(max-width: ${MIN_COMPATIBLE_WIDTH})`])
      .pipe(map(result => result.matches))
  }
}
