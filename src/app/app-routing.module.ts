import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsPageComponent } from './albums/albums-page/albums-page.component';
import { PhotosPageComponent } from './photos/photos-page/photos-page.component';
import { SinglePhotoPageComponent } from './photos/single-photo-page/single-photo-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AlbumsPageComponent },
  { path: 'albums', component: AlbumsPageComponent },
  { path: 'albums/:id', component: PhotosPageComponent },
  { path: 'albums/:id/photos/:photoId', component: SinglePhotoPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
