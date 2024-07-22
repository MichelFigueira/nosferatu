import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.css']
})
export class VideoPreviewComponent {
  @Input() videoUrl: string | null = null;
}