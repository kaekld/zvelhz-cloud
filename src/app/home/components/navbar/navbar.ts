import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login-service';
import { UserFilesService } from '../../services/user-files-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router)
  private readonly userFilesService = inject(UserFilesService)

  public userName = signal<string>(this.loginService.userdata()?.nombre ?? 'Jhon Doe');

  onLogout(): void {
    this.router.navigate(['/login'])
    this.loginService.userdata.set(null);
    this.userFilesService.userFileList.set([])
  }


}
