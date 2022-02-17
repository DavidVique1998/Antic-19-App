import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';


@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
  constructor(private router: Router, private notificationService: NotificationService) { }

  intercept(
    request: HttpRequest<unknown>,
    // next: HttpHandler
    response: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return response.handle(request).pipe(
      tap(
        (next) => {
          if (next instanceof HttpResponse) {
            switch (next.status) {
              case 204:
                // Swal.fire({
                //   position: 'top-end',
                //   title: 'Sin contenido',
                //   showConfirmButton: false,
                //   timer: 1500
                // })
                this.notificationService.showError('Sin contenido', 'Sin contenido');
                break;
            }
          }
        },
        (error) => {
          switch (error.status) {
            case 400:
              // Swal.fire({
              //   icon: 'error',
              //   title: 'Error',
              //   text: 'Algo salio mal!',
              //   footer: 'Error: ' + error.message,
              // })
              break;
            case 401:
              // Swal.fire({
              //   icon: 'error',
              //   title: 'Error',
              //   text: 'Algo salio mal!',
              //   footer: 'Error: ' + error.message,
              // })
              break;
            case 403:
              // Swal.fire({
              //   icon: 'error',
              //   title: 'Error',
              //   text: 'Algo salio mal!',
              //   footer: 'Error: ' + error.message,
              // })
              break;
            case 406:
              // Swal.fire({
              //   icon: 'error',
              //   title: 'Error',
              //   text: 'Algo salio mal!',
              //   footer: 'Error: ' + error.error.message,
              // })
              break;
            case 409:
              // Swal.fire({
              //   icon: 'error',
              //   title: 'Error',
              //   text: 'Algo salio mal!',
              //   footer: 'Error: ' + error.message,
              // })
              break;
            case 500:
              // Swal.fire({
              //   icon: 'error',
              //   title: 'Error',
              //   text: 'Algo salio mal!',
              //   footer: 'Error: ' + error.message,
              // })
              break;
          }
        }
      )
    );
  }
}
