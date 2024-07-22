import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VideoService {
    private apiUrl = 'http://localhost:5000';

    constructor(private http: HttpClient) { }

    uploadVideo(video: File): Observable<any> {
        const formData = new FormData();
        formData.append('video', video);
        return this.http.post(`${this.apiUrl}/generate-reel`, formData);
    }
}