import { Component, OnInit, ViewChild } from '@angular/core';

import { BreakpointService } from './core/services/breakpoint/breakpoint.service';
import { OnDestroyDirective } from './core/directives/on-destroy.directive';
import { filter, takeUntil } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends OnDestroyDirective implements OnInit {
  isMobile = false;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private readonly router: Router,
    private readonly breakpointService: BreakpointService
  ) {
    super();
  }

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(e => e instanceof NavigationEnd))
        .subscribe(() => {
          if (this.sidenav.opened) {
            this.sidenav.close();
          }
        });

    this.breakpointService.isMobile$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.isMobile = result;
      });
  }
}
