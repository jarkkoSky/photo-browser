import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PhotosStore, PhotosState } from './photos.store';
import { Observable } from 'rxjs';
import { Photo } from './photo.model';

@Injectable({ providedIn: 'root' })
export class PhotosQuery extends QueryEntity<PhotosState> {
  photos$ = this.selectAll();

  constructor(protected store: PhotosStore) {
    super(store);
  }

  selectSinglePhoto(albumId, photoId): Observable<Photo> {
    return this.selectEntity(this.store.formCompositeKey(albumId, photoId));
  }

  doesPhotoExist(albumId, photoId): number {
    return this.getCount(
      entity => entity.id === photoId && entity.albumId === albumId
    );
  }
}
