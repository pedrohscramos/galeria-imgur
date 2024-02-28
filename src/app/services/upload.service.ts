import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private readonly clientId = 'ce769cee9d75aea'; // Replace with your Imgur API client ID
  private readonly uploadUrl = 'https://api.imgur.com/3/image';
  private readonly galleryUrl = 'https://api.imgur.com/3/gallery';

  constructor(private http: HttpClient) { }

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.clientId}`
    });

    return this.http.post(this.uploadUrl, formData, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erroao fazer upload:', error);
        return throwError('Falha ao fazer upload. Tente mais tarde.');
      })
    );
  }

  createGallery(images: string[]): Observable<any> {
    const data = {
      image_ids: images
    };

    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.clientId}`
    });

    return this.http.post(this.galleryUrl, data, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao criar galeria:', error);
        return throwError('Falha ao criar galeria. Tente mais tarde.');
      })
    );
  }
}
