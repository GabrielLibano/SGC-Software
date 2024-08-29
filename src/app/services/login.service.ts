import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "localhost:3000";
  constructor(private http: HttpClient) {
  }

  login(login: Login){
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, login)
  }

}
