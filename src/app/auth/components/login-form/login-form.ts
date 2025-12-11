import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../interfaces/login-interface';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styles: ``,
})
export class LoginForm {

  private readonly loginService = inject(LoginService) 

  emptyFields: boolean = false;
  invalidCredentials: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit(): void {
    if(this.loginForm.valid){
      this.emptyFields = false;

      const loginData: LoginRequest  = {
        email: this.loginForm.value.email ?? '',
        password: this.loginForm.value.password ?? ''
      }
      
      this.loginService.loginUser(loginData).subscribe({
        next: resp => {
          console.log(resp)
        },
        error: err => {
          console.log(err)
        }
      })
    }
    else{
      this.emptyFields = true;
    }
  }

}
