import { Inject, Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MioInterceptorInterceptor implements HttpInterceptor {
  constructor(@Inject("BACKEND_URL") private beUrl: string) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({
      url: `${this.beUrl}/${request.url}`,
      withCredentials: true,
    });

    return next.handle(apiReq);
  }
}
