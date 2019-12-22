import { inject, InjectionToken } from '@angular/core';
import { PaginatorPlugin } from '@datorama/akita';
import { PhotosQuery } from './state/photos.query';

export const PHOTOS_PAGINATOR = new InjectionToken('PHOTOS_PAGINATOR', {
  providedIn: 'root',
  factory: () => {
    const photosQuery = inject(PhotosQuery);
    return new PaginatorPlugin(photosQuery).withControls().withRange();
  }
});
