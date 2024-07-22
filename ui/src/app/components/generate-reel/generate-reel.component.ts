import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-generate-reel',
  templateUrl: './generate-reel.component.html',
  styleUrls: ['./generate-reel.component.css']
})
export class GenerateReelComponent {
  @Output() generateReel = new EventEmitter<void>();

  onGenerate() {
    this.generateReel.emit();
  }
}