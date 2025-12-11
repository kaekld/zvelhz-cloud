import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '@environments/environment';
import { LoginRequest, LoginResponse } from '../interfaces/login-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private http = inject (HttpClient);
  url: string = `${ environment.API_URL }/usuarios/login`;
  isLogin = signal<boolean>(false);

  // To save user information
  userdata = signal<LoginResponse | null>(null)

  loginUser(loginData: LoginRequest){
    return this.http.post<LoginResponse>(this.url, loginData);
  }

}
