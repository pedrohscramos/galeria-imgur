import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploaderComponent } from './components/uploader/uploader.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CreateGalleryComponent } from './components/create-gallery/create-gallery.component';
import { DisplayGalleryComponent } from './components/display-gallery/display-gallery.component';
import { AlgoritmoComponent } from './components/algoritmo/algoritmo.component';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    CreateGalleryComponent,
    DisplayGalleryComponent,
    AlgoritmoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    NgxDropzoneModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
