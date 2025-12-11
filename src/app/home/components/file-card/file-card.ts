import { Component, computed, input, output, signal } from '@angular/core';
import { FileResponse } from '../../interfaces/file-interface';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-file-card',
  imports: [],
  templateUrl: './file-card.html',
  styles: ``,
})
export class FileCard {

  viewDeleteButton = input.required<boolean>();
  sendFileId = output<number>();

  fileData = input.required<FileResponse>();
  fileUrl = computed(() => {
    return `${ environment.API_URL }/files/download/${ this.fileData().id }`;
  })

  dateFormat = computed(() => {
    const date = new Date(this.fileData().creadoEn);
    return date.toLocaleDateString('es-MX')
  })

  emitSendFileId(): void {
    this.sendFileId.emit(this.fileData().id)
  }
}
