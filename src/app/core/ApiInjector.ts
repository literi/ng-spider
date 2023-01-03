import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiInjector implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const resetReq = req.clone({
      setHeaders: { Appraisal_Cookie: 'Amazing_039' },
    });
    console.log(resetReq, 'resetReq');
    return next.handle(req);
  }
}
