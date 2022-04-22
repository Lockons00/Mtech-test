import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, Observable, of } from "rxjs";

import { environment } from "src/environments/environment";

import { Farm } from '../interfaces/farm.interface';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  atrapaError = (error: HttpErrorResponse) => {
    console.warn('Error en:', error.message);
    return of([]);
  }

  getAllFarms(): Observable<Farm[]> {
    const url = `${this.baseUrl}/farms/`;
    return this.http.get<Farm[]>(url).pipe(
      delay(1000),
      catchError(this.atrapaError)
    )
  }

  getAllFarmsError(): Observable<Farm[]> {
    const url = `${this.baseUrl}/farmsError/`;
    return this.http.get<Farm[]>(url).pipe(
      delay(1000),
      catchError(this.atrapaError)
    )
  }

  getFarmById(id: number): Observable<Farm> {
    const url = `${this.baseUrl}/farms/${id}`;
    return this.http.get<Farm>(url).pipe(delay(0))
  }

}

