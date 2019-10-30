import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

/**Obtener los datos publicos del proveedor de autenticaciòn FB
 */
  getData(access_token: string): Observable<any> {
  let url = 'https://graph.facebook.com/me?fields=id,name,email,first_name,last_name&access_token=' + access_token;
  return this.http.get(url).pipe(
    map(this.extractData),
    catchError(this.handleError));
  }
}
