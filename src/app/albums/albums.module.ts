import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AlbumsPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    SharedModule
  ],
  providers: []
})
export class AlbumsModule {}
