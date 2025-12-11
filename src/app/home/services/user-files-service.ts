import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { FileResponse } from '../interfaces/file-interface';

@Injectable({
  providedIn: 'root',
})
export class UserFilesService {

  private readonly http = inject(HttpClient)
  apiUrl: string = `${ environment.API_URL }`
  userFileList = signal<FileResponse[]>([])

  // GET USER FILELIST
  loadUserFileList(userId: number): Observable<FileResponse[]>{
    const url: string = `${ this.apiUrl }/files/user/${ userId }`;
    return this.http.get<FileResponse[]>(url);
  }

  //POST FILE
  newFile(formData: FormData){
    const url = `${ this.apiUrl }/files/upload`;
    return this.http.post(url, formData, { responseType: 'text' });
  }

  // DELETE FILE
  deleteFile(userId: number, fileId: number){
    const url = `${ this.apiUrl }/files/${ fileId }?userIdSolicitante=${ userId }`
    return this.http.delete(url, { responseType: 'text' })
  }
}
