import { Component } from '@angular/core';
import { VideoService } from './services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  video: File | null = null;
  reelUrl: string | null = null;

  constructor(private videoService: VideoService) { }

  onVideoUploaded(video: File) {
    this.video = video;
  }

  onGenerateReel() {
    if (!this.video) return;

    this.videoService.uploadVideo(this.video).subscribe(response => {
      this.reelUrl = response.reelUrl;
    });
  }
}