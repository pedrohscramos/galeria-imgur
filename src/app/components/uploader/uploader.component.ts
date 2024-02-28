import { Component } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

  errorMessage: string | null = null;

  constructor(private uploadService: UploadService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadImage(file);
    }
  }

  uploadImage(file: File) {
    this.errorMessage = null;
    this.uploadService.uploadImage(file).subscribe(
      (response) => {
        console.log('Imagem enviada', response);
        
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
