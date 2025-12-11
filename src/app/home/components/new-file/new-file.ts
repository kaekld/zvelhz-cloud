import { Component, inject, signal } from '@angular/core';
import { UserFilesService } from '../../services/user-files-service';
import { LoginService } from 'src/app/auth/services/login-service';

@Component({
  selector: 'app-new-file',
  imports: [],
  templateUrl: './new-file.html',
  styles: ``,
})
export class NewFile {

  private readonly loginService = inject(LoginService);
  private readonly userFilesService = inject(UserFilesService);

  selectedFile = signal<File | null>(null);
  userId: number = this.loginService.userdata()?.id ?? 0;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if(input.files){
      const file = input.files[0];
      this.selectedFile.set(file)
    }
  }

  loadUserFilesList(){
    this.userFilesService.loadUserFileList(this.userId).subscribe({
      next: resp => {
        this.userFilesService.userFileList.set(resp);
      },
      error: err => console.log(err)
    })
  }

  sendFileData(formData: FormData): void {
    this.userFilesService.newFile(formData).subscribe({
      next: () => {
        this.loadUserFilesList();
      }
    })
  }

  buildFormData(file: File): FormData {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', this.userId.toString());
    return  formData
  }

  onSubmit(): void {
    const file = this.selectedFile();
    if(file){
      const formData = this.buildFormData(file);
      this.selectedFile.set(null);
      this.sendFileData(formData);
    }
  }

}
