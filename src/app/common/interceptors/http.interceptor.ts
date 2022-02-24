import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({ headers: req.headers.append('app-id', '620648023869ad3df48ad0e6') });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
