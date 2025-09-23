import { Component, OnInit, ViewChild } from '@angular/core';

import { BreakpointService } from './core/services/breakpoint/breakpoint.service';
import { OnDestroyDirective } from './core/directives/on-destroy.directive';
import { filter, takeUntil } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './core/services/auth/auth.service';
import { LocalStorageService } from './core/services/local-storage/local-storage.service';
import { localStorageKeys } from './core/models/localStorageKeys.enum';
import { IUser } from './modules/shared/models/user.model';

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
    private readonly localStorageService: LocalStorageService,
  ) {
    super();
  }

  ngOnInit(): void {
    const storedUser = this.localStorageService.getItem(localStorageKeys.USER_KEY);
    const storedToken = this.localStorageService.getItem(localStorageKeys.TOKEN_KEY);

    if (storedUser && storedToken) {
      this.authService.setAuthData(storedUser as IUser, storedToken as string);
    }


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

      if (!user) {
        this.authService.clearAuthData();
      }
    });
  }
}
