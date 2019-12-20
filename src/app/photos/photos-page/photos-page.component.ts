import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationResponse, PaginatorPlugin } from '@datorama/akita';
import { switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/state/users.service';
import { UsersQuery } from 'src/app/state/users.query';

import memo from 'memo-decorator';
import { PageEvent } from '@angular/material/paginator';
import { Photo } from '../state/photo.model';
import { PHOTOS_PAGINATOR } from '../photos.paginator';
import { PhotosService } from '../state/photos.service';
import { ActivatedRoute } from '@angular/router';
import { AlbumsQuery } from 'src/app/albums/state/albums.query';
import { Album } from 'src/app/albums/state/album.model';
import { AlbumsService } from 'src/app/albums/state/albums.service';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {
  perPage = 15;
  albumId: number;

  photos$: Observable<PaginationResponse<Photo>>;
  album$: Observable<Album>;

  constructor(
    @Inject(PHOTOS_PAGINATOR) public paginatorRef: PaginatorPlugin<Photo>,
    private photosService: PhotosService,
    private albumsQuery: AlbumsQuery,
    private albumsService: AlbumsService,
    private usersQuery: UsersQuery,
    private route: ActivatedRoute
  ) {}

  @memo()
  username(userId) {
    return this.usersQuery.getNameById(userId);
  }

  ngOnInit() {
    this.paginatorRef.setPage(0);

    this.route.paramMap.subscribe(paramsMap => {
      this.albumId = parseInt(paramsMap.get('id'), 0);
      if (this.albumsQuery.doesAlbumExist(this.albumId) === 0) {
        this.albumsService.getSingleAlbum(this.albumId);
      }
    });

    this.album$ = this.albumsQuery.selectAlbumById(this.albumId);
    this.initData();
  }

  initData() {
    this.paginatorRef.clearCache();

    this.photos$ = this.paginatorRef.pageChanges.pipe(
      switchMap(page => {
        const requestFn = () =>
          this.photosService.get({ page }, this.perPage, this.albumId);
        return this.paginatorRef.getPage(requestFn) as Observable<
          PaginationResponse<Photo>
        >;
      })
    );
  }

  pageChanged(event: PageEvent) {
    if (event.pageSize !== this.perPage) {
      this.perPage = event.pageSize;
      this.paginatorRef.refreshCurrentPage();
    } else {
      this.paginatorRef.setPage(event.pageIndex);
    }
  }
}
