import { Injectable } from '@angular/core';
import { AlbumsStore } from './albums.store';
import { Observable } from 'rxjs';
import { PaginationResponse } from '@datorama/akita';
import { Album } from './album.model';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  constructor(protected store: AlbumsStore, private http: HttpClient) {}

  getSingleAlbum(id) {
    const params = new HttpParams().set('id', id.toString());

    this.http
      .get<Album[]>(`${environment.backendUrl}/albums`, { params })
      .subscribe(entities => {
        this.store.upsertMany(entities);
      });
  }

  get(paginatorParams, perPage: number): Observable<PaginationResponse<Album>> {
    const startIndex = paginatorParams.page * perPage;
    const endIndex = startIndex + perPage;

    const params = new HttpParams()
      .set('_start', startIndex.toString())
      .set('_end', endIndex.toString());

    return this.fetchData(params, paginatorParams.page, perPage);
  }

  fetchData(params, page, perPage) {
    return this.http
      .get(`${environment.backendUrl}/albums`, { observe: 'response', params })
      .pipe(
        map((resp: any) => {
          const totalCount = resp.headers.get('X-Total-Count');
          return {
            data: resp.body,
            perPage,
            lastPage: Math.ceil(totalCount / 15),
            currentPage: page,
            total: totalCount
          };
        })
      ) as Observable<PaginationResponse<Album>>;
  }
}
