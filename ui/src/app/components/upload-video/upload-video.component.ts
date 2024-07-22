import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent {
  @Output() videoUploaded = new EventEmitter<File>();

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.videoUploaded.emit(file);
    }
  }
}