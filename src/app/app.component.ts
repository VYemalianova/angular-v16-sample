import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { filter, takeUntil } from 'rxjs';

import { BreakpointService } from './core/services/breakpoint/breakpoint.service';
import { OnDestroyDirective } from './core/directives/on-destroy.directive';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends OnDestroyDirective implements OnInit {
  isMobile = false;
  isUserLoggedIn = false;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private readonly router: Router,
    private readonly breakpointService: BreakpointService,
    private readonly authService: AuthService,
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

    this.authService.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.isUserLoggedIn = Boolean(user);
    });
  }
}
