import { Component, OnInit } from '@angular/core';

import { BreakpointService } from './core/services/breakpoint/breakpoint.service';
import { OnDestroyDirective } from './core/directives/on-destroy.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends OnDestroyDirective implements OnInit {
  isMobile = false;

  constructor(private readonly breakpointService: BreakpointService) {
    super();
  }

  ngOnInit(): void {
    this.breakpointService.isMobile$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.isMobile = result;
      });
  }
}
