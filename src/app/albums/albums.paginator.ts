import { inject, InjectionToken } from '@angular/core';
import { AlbumsQuery } from './state/albums.query';
import { PaginatorPlugin } from '@datorama/akita';

export const ALBUMS_PAGINATOR = new InjectionToken('ALBUMS_PAGINATOR', {
  providedIn: 'root',
  factory: () => {
    const albumsQuery = inject(AlbumsQuery);
    return new PaginatorPlugin(albumsQuery).withControls().withRange();
  }
});
