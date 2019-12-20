import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosQuery } from '../state/photos.query';
import { PhotosService } from '../state/photos.service';
import { Photo } from '../state/photo.model';
import { Observable } from 'rxjs';
import { Album } from 'src/app/albums/state/album.model';

import memo from 'memo-decorator';
import { UsersQuery } from 'src/app/state/users.query';
import { AlbumsQuery } from 'src/app/albums/state/albums.query';
import { AlbumsService } from 'src/app/albums/state/albums.service';

@Component({
  selector: 'app-single-photo-page',
  templateUrl: './single-photo-page.component.html',
  styleUrls: ['./single-photo-page.component.scss']
})
export class SinglePhotoPageComponent implements OnInit {
  photo$: Observable<Photo>;
  album$: Observable<Album>;

  constructor(
    private route: ActivatedRoute,
    private photosQuery: PhotosQuery,
    private albumsQuery: AlbumsQuery,
    private albumsService: AlbumsService,
    private photosService: PhotosService,
    private usersQuery: UsersQuery
  ) {}

  @memo()
  username(userId) {
    return this.usersQuery.getNameById(userId);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramsMap => {
      const albumId = parseInt(paramsMap.get('id'), 0);
      const photoId = parseInt(paramsMap.get('photoId'), 0);

      if (this.photosQuery.doesPhotoExist(albumId, photoId) === 0) {
        this.photosService.getSinglePhoto(albumId, photoId);
      }

      if (this.albumsQuery.doesAlbumExist(albumId) === 0) {
        this.albumsService.getSingleAlbum(albumId);
      }

      this.photo$ = this.photosQuery.selectSinglePhoto(albumId, photoId);
      this.album$ = this.albumsQuery.selectAlbumById(albumId);
    });
  }
}
