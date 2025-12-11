import { Component, inject, OnInit, signal } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { RecentFiles } from "../../components/recent-files/recent-files";
import { LoginService } from 'src/app/auth/services/login-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Navbar, RecentFiles, RouterLink],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {

  private readonly loginService = inject(LoginService);
  isLogin = signal<boolean>(this.loginService.isLogin());

}
