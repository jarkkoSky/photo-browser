import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AlbumsStore, AlbumsState } from './albums.store';
import { Album } from './album.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumsQuery extends QueryEntity<AlbumsState> {
  albums$ = this.selectAll();

  constructor(protected store: AlbumsStore) {
    super(store);
  }

  getAlbumById(id): Album {
    return this.getEntity(id);
  }

  selectAlbumById(id): Observable<Album> {
    return this.selectEntity(id);
  }

  doesAlbumExist(albumId): number {
    return this.getCount(entity => entity.id === albumId);
  }
}
