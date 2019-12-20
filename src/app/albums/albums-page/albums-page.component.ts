import { Component, OnInit, Inject } from '@angular/core';
import { AlbumsService } from '../state/albums.service';
import { Observable } from 'rxjs';
import { Album } from '../state/album.model';
import { PaginationResponse, PaginatorPlugin } from '@datorama/akita';
import { ALBUMS_PAGINATOR } from '../albums.paginator';
import { switchMap } from 'rxjs/operators';
import { UsersQuery } from 'src/app/state/users.query';
import { PageEvent } from '@angular/material/paginator';

import memo from 'memo-decorator';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {
  albums$: Observable<PaginationResponse<Album>>;
  perPage = 15;

  constructor(
    @Inject(ALBUMS_PAGINATOR) public paginatorRef: PaginatorPlugin<Album>,
    private albumsService: AlbumsService,
    private usersQuery: UsersQuery
  ) {}

  @memo()
  username(userId) {
    return this.usersQuery.getNameById(userId);
  }

  ngOnInit() {
    this.paginatorRef.setPage(0);

    this.initData();
  }

  initData() {
    this.albums$ = this.paginatorRef.pageChanges.pipe(
      switchMap(page => {
        const requestFn = () => this.albumsService.get({ page }, this.perPage);
        return this.paginatorRef.getPage(requestFn) as Observable<
          PaginationResponse<Album>
        >;
      })
    );
  }

  pageChanged(event: PageEvent) {
    if (event.pageSize !== this.perPage) {
      this.paginatorRef.clearCache();
      this.perPage = event.pageSize;
      this.paginatorRef.refreshCurrentPage();
    } else {
      this.paginatorRef.setPage(event.pageIndex);
    }
  }
}
