import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoritmoComponent } from './components/algoritmo/algoritmo.component';
import { CreateGalleryComponent } from './components/create-gallery/create-gallery.component';
import { UploaderComponent } from './components/uploader/uploader.component';

const routes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full' }, 
  { path: 'upload', component: UploaderComponent },
  { path: 'create-gallery', component: CreateGalleryComponent },
  { path: 'algoritmo', component: AlgoritmoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
