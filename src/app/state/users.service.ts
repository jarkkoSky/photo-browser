import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersStore } from './users.store';
import { User } from './user.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private store: UsersStore, private http: HttpClient) {}

  get() {
    this.http
      .get<User[]>(`${environment.backendUrl}/users`)
      .subscribe(entities => {
        this.store.set(entities);
      });
  }
}
