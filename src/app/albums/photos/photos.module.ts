import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { SharedModule } from '../../shared/shared.module';
import { SinglePhotoPageComponent } from './single-photo-page/single-photo-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PhotosPageComponent, SinglePhotoPageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    SharedModule,
    RouterModule
  ]
})
export class PhotosModule {}
