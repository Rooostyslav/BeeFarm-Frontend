import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH_API_URL } from 'src/app/app-injections-tokens';
import { tap } from 'rxjs/operators';
import { Token } from '../models/token';
import jwt_decode from "jwt-decode";
import { DecodedToken } from 'src/models/shared/decodedToken';

export const ACCESS_TOKEN_KEY = 'key_token';
export const UserId = '';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject(AUTH_API_URL) private apiUrl: string,
    private router: Router
  ) {}

  getToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  getUserId() : number {
    return +(localStorage.getItem(UserId) || "null");
  }

  login(email: string, password: string) : Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}api/auth/login`, {
      email, password
    }).pipe(
        tap(token => {
          localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token);
          var userId = jwt_decode<DecodedToken>(this.getToken() || "")?.sub;
          localStorage.setItem(UserId, userId);
        })
      )
  }

  isAuthenticated() : boolean {
    return this.getToken() != null;
  }

  logout() : void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(UserId);
    this.router.navigate(['']);
  }
}
