import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'https://dummyjson.com/auth/login';

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {

    return this.http.post<any>(this.apiUrl, {
      username,
      password
    }).pipe(

      tap((res) => {
        localStorage.setItem('token', res.accessToken);
        this.isLoggedIn.next(true);
      })

    );
  }
}
