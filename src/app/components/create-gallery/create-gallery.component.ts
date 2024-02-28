// create-gallery.component.ts
import { Component } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-create-gallery',
  templateUrl: './create-gallery.component.html',
  styleUrls: ['./create-gallery.component.scss']
})
export class CreateGalleryComponent {
  name_album: string = '';
  errorMessage: string | null = null;
  image1ID: any;
  image2ID: any;

  constructor(private uploadService: UploadService) { }

  createGallery() {
    this.errorMessage = null;

    const imageIds = [this.image1ID, this.image2ID];
    this.uploadService.createGallery(imageIds).subscribe(
      (response) => {
        console.log('Gallery created successfully:', response);
        
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
