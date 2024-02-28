import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-gallery',
  templateUrl: './display-gallery.component.html',
  styleUrls: ['./display-gallery.component.scss']
})
export class DisplayGalleryComponent {
  @Input() galleryImageUrls: string[] = [];
}