import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UsersStore, UsersState } from './users.store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState> {
  constructor(protected store: UsersStore) {
    super(store);
  }

  getNameById(id): Observable<string> {
    return this.selectEntity(id, 'name');
  }
}
