import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateReelComponent } from './components/generate-reel/generate-reel.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateReelComponent,
    UploadVideoComponent,
    VideoPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressBarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
