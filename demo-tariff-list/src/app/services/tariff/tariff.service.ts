import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ITariff } from 'src/app/models/tariff';

@Injectable({
  providedIn: 'root',
})
export class TariffService {
  API_URL: string = 'http://localhost:4200/tariffs';
  constructor(private http: HttpClient) {}

  getTariffData(): Observable<ITariff[]> {
    var data = this.http.get<ITariff[]>(this.API_URL).pipe(
      map((result) => {
        return result;
      }),
      catchError(this.handleError)
    );
    return data;
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again with npm run api command.')
    );
  }
}
