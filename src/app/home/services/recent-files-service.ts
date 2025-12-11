import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { FileResponse } from '../interfaces/file-interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecentFilesService {

  private readonly http = inject(HttpClient);
  apiUrl: string = `${ environment.API_URL }/files/latest`
  fileList = signal<FileResponse[]>([]);

  loadFiles(): Observable<FileResponse[]>{
    return this.http.get<FileResponse[]>(this.apiUrl)
  }

}
