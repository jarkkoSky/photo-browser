import { Injectable } from '@angular/core';
import { Photo } from './photo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface PhotosState extends EntityState<Photo> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'photos', idKey: 'compositeKey' })
export class PhotosStore extends EntityStore<PhotosState> {
  constructor() {
    super();
  }

  formCompositeKey(albumId, photoId) {
    return [albumId, photoId].join(',');
  }

  akitaPreAddEntity(x: Readonly<Photo>): Photo {
    return {
      ...x,
      compositeKey: [x.albumId, x.id].join(',')
    };
  }
}
