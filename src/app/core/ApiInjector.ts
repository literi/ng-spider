import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { map, Observable } from 'rxjs';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';
@Injectable()
export class ApiInjector implements HttpInterceptor {
  constructor(injector: Injector, public popup: PopupService) {
    const PopupElement = createCustomElement(PopupComponent, { injector });
    customElements.define('popup-element', PopupElement);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const resetReq = req.clone({
    //   setHeaders: { Appraisal_Cookie: 'Amazing_039' },
    // });
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body.code != 10001) {
            if (event.body.code == 401) {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }
            this.popup.showAsElement(event.body.msg);
          }
          return event;
        }
        return event;
      })
    );
  }
}
