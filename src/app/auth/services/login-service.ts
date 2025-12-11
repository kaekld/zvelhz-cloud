import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { LoginErrorResponse, LoginRequest, LoginResponse } from '../interfaces/login-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  private http = inject (HttpClient);
  url: string = `${ environment.API_URL }/usuarios/login`;

  loginUser(loginData: LoginRequest){
    return this.http.post<LoginResponse | LoginErrorResponse>(this.url, loginData);
  }

} 
