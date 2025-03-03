import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Example: Add an authorization token to the request headers
    const token = localStorage.getItem('auth_token'); // Get token from storage

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Example: Log request details
    console.log('Intercepted Request:', request);

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        // Example: Log response details
        //if (event instanceof HttpResponse) {
        //  console.log('Intercepted Response:', event);
        //}
      }),
      catchError((error: HttpErrorResponse) => {
        // Example: Handle authentication errors
        if (error.status === 401) {
          // Handle unauthorized error (e.g., redirect to login)
          console.error('Unauthorized access. Redirecting to login.');
          // You might want to use a Router to navigate here.
          // this.router.navigate(['/login']);
        }

        // Example: Handle other errors
        console.error('HTTP Error:', error);
        return throwError(error); // Re-throw the error
      })
    );
  }
}
