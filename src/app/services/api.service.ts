import { Injectable } from "@angular/core";
import { environment } from "src/enviromnents/enviromnent"
import { HttpClient } from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import {retry, catchError} from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    
    protected API_URL: string = environment.API_URL;

    constructor(
        private http: HttpClient
    ) {}

    get(route:string, options?:any): Observable<any> {
        return this.http.get<any>(this.API_URL + route, options || {}).pipe(retry(1), 
        catchError((error) => {
            return throwError(() => error)
        }));
    }
}