import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../interfaces/login-interface';
import { LoginService } from '../../services/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styles: ``,
})
export class LoginForm {

  private readonly loginService = inject(LoginService)
  private readonly router = inject(Router)

  emptyFields: boolean = false;
  invalidCredentials: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit(): void {
    if(this.loginForm.valid){
      this.emptyFields = false;
      const loginData: LoginRequest = this.convertLoginData()
      this.sendLoginData(loginData)
    }
    else{
      this.emptyFields = true;
    }
  }

  convertLoginData(): LoginRequest {
    return this.loginForm.getRawValue() as LoginRequest;
  }

  sendLoginData(loginData: LoginRequest): void {
    this.loginService.loginUser(loginData).subscribe({
        next: resp => {
          if('id' in resp){
            this.loginService.userdata.set(resp);
            this.loginService.isLogin.set(true);
            this.router.navigate(['/home'])
          }
          else{
            this.invalidCredentials = true;
          }
        }
    })
  }

}
