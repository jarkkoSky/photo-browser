import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationResponse } from '@datorama/akita';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PhotosStore } from './photos.store';
import { Photo } from './photo.model';
import { Album } from 'src/app/albums/state/album.model';

@Injectable({ providedIn: 'root' })
export class PhotosService {
  constructor(protected store: PhotosStore, private http: HttpClient) {}

  getSinglePhoto(albumId, photoId) {
    const params = new HttpParams()
      .set('albumId', albumId.toString())
      .set('id', photoId.toString());

    this.http
      .get<Photo[]>(`${environment.backendUrl}/photos`, { params })
      .subscribe(entities => {
        this.store.upsertMany(entities);
      });
  }

  get(
    paginatorParams,
    perPage: number,
    albumId: number
  ): Observable<PaginationResponse<Photo>> {
    const startIndex = paginatorParams.page * perPage;
    const endIndex = startIndex + perPage;

    const params = new HttpParams()
      .set('_start', startIndex.toString())
      .set('_end', endIndex.toString())
      .set('albumId', albumId.toString());

    return this.fetchData(params, paginatorParams.page, perPage);
  }

  fetchData(params, page, perPage) {
    return this.http
      .get(`${environment.backendUrl}/photos`, {
        observe: 'response',
        params
      })
      .pipe(
        map((resp: any) => {
          const totalCount = resp.headers.get('X-Total-Count');

          for (const photo of resp.body) {
            photo.compositeKey = this.store.formCompositeKey(
              photo.albumId,
              photo.id
            );
          }

          return {
            data: resp.body,
            perPage,
            lastPage: Math.ceil(totalCount / 15),
            currentPage: page,
            total: totalCount
          };
        })
      ) as Observable<PaginationResponse<Photo>>;
  }
}
