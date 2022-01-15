import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map, debounceTime } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class HttpErrorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.requestStarted();
    return next.handle(req).pipe(
      debounceTime(50000),
      map((response) => {
        this.spinnerService.requestEnded();
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Client error', error.error.message);
    } else {
      // Error en el lado del servidor
      console.log('Error Status:', error.status);
      console.log('Error:', error.error);
    }
    //catch and rethrow
    this.spinnerService.resetSpinner();
    return throwError('Cannot perform the request, please try again later');
  }
}
