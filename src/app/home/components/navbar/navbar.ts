import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  private readonly loginService = inject(LoginService);
  public userName = signal<string>(this.loginService.userdata()?.nombre ?? 'Jhon Doe');

}
