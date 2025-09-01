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

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.getAccessToken();
    const apiUrl = environment.apiUrl;
    
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
    console.error(res.status, res.statusText);
  }
}
