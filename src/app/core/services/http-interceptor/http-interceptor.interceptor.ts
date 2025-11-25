import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { ToasterService } from '../toaster/toaster.service';
import { ToastNotificationType } from '../../models/notification-type.enum';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private readonly authService: AuthService,
    private readonly toasterService: ToasterService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.getAccessToken();
    const requestType = request.params.get('requestType') ?? 'external';
    const isInternalRequest = requestType === 'internal';
    const apiUrl = isInternalRequest ? 'http://localhost:4200' : environment.apiUrl;
    
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      })
    }

    request = request.clone({
      url: `${apiUrl}${request.url}`,
    });

    return next.handle(request).pipe(
      catchError((res) => {
        this.handleError(res);

        throw res;
      }),
    );
  }

  private handleError(res: HttpErrorResponse) {
    if (res.status === 401) {
      this.authService.clearAuthData();

      this.toasterService.openToast({
        type: ToastNotificationType.Error,
        title: 'Missing or invalid authentication token.',
      });
    }
  }
}
