import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginData { email: string; password: string; }
interface RegisterData { nombre: string; email: string; password: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  login(data: LoginData): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  register(data: RegisterData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  logout(): void { localStorage.removeItem('token'); }

  setToken(token: string): void { localStorage.setItem('token', token); }

  getToken(): string | null { return localStorage.getItem('token'); }

  isLoggedIn(): boolean { return !!this.getToken(); }
}
