import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AlbumsRoutingModule } from './albums.routing.module';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [AlbumsPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    SharedModule,
    AlbumsRoutingModule,
    PhotosModule
  ]
})
export class AlbumsModule {}
