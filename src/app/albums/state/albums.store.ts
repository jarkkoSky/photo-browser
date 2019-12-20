import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface AlbumsState extends EntityState<Album> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'albums' })
export class AlbumsStore extends EntityStore<AlbumsState> {
  constructor() {
    super();
  }
}
