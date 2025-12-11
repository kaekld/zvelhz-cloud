import { Component, computed, inject } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login-service';
import { UserFilesService } from '../../services/user-files-service';
import { FileCard } from "../file-card/file-card";

@Component({
  selector: 'app-user-files',
  imports: [FileCard],
  templateUrl: './user-files.html',
  styles: ``,
})
export class UserFiles {

  private readonly loginService = inject(LoginService);
  private readonly userFilesService = inject(UserFilesService);

  userId: number = this.loginService.userdata()?.id ?? 0;

  reversedFiles = computed(() => {
    const originalFiles = this.userFilesService.userFileList();
    return [...originalFiles].reverse();
  })

  ngOnInit(): void {
    this.loadUserFilesList()
  }

  loadUserFilesList(){
    this.userFilesService.loadUserFileList(this.userId).subscribe({
      next: resp => {
        this.userFilesService.userFileList.set(resp);
      },
      error: err => console.log(err)
    })
  }

  deleteFile(fileId: number){
    this.userFilesService.deleteFile(this.userId, fileId).subscribe({
      next: () => {
        this.loadUserFilesList()
      }
    })
  }
}
