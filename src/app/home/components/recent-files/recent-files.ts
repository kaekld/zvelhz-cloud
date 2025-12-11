import { Component, computed, inject, OnInit } from '@angular/core';
import { FileCard } from "../file-card/file-card";
import { RecentFilesService } from '../../services/recent-files-service';
import { FileResponse } from '../../interfaces/file-interface';

@Component({
  selector: 'app-recent-files',
  imports: [FileCard],
  templateUrl: './recent-files.html',
  styles: ``,
})
export class RecentFiles implements OnInit {

  private readonly recentFilesService = inject(RecentFilesService)

  reversedFileList = computed(() =>{
    const originalFiles = this.recentFilesService.fileList();
    return [...originalFiles].reverse();
  })

  ngOnInit(): void {
    this.loadFileList()
  }

  loadFileList(): void {
    this.recentFilesService.loadFiles().subscribe({
      next: resp => {
        this.recentFilesService.fileList.set(resp);
      },
      error: err => console.log(err)
    })
  }


}
