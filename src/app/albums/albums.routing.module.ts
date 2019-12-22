import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { PhotosPageComponent } from './photos/photos-page/photos-page.component';
import { SinglePhotoPageComponent } from './photos/single-photo-page/single-photo-page.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsPageComponent
  },
  { path: ':id', component: PhotosPageComponent },
  { path: ':id/photos/:photoId', component: SinglePhotoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {}
