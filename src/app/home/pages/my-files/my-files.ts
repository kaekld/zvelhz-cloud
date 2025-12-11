import { Component, inject, signal } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { LoginService } from 'src/app/auth/services/login-service';
import { UserFiles } from "../../components/user-files/user-files";
import { NewFile } from "../../components/new-file/new-file";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-files',
  imports: [Navbar, UserFiles, NewFile, RouterLink],
  templateUrl: './my-files.html',
  styles: ``,
})
export class MyFiles {

  private readonly loginService = inject(LoginService);
  isLogin = signal<boolean>(this.loginService.isLogin());

}
