import { Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay, tap } from 'rxjs';
import type { FavoriteLoc } from '../models/common';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  allLoc: FavoriteLoc[] = [];
  currAllLoc = new BehaviorSubject<FavoriteLoc[]>([]);
  getAllLoc$ = this.currAllLoc.asObservable().pipe(shareReplay(1));

  constructor(private api: ApiService) {}

  initAllData() {
    return this.api.getAll().pipe(
      map((it) => {
        return it.data;
      }),
      map((list) => {
        return list.map((el) => {
          const { id, name, address, category } = el;

          return <FavoriteLoc>{ id, name, address, category, nickname: '' };
        });
      }),
      tap((it) => (this.allLoc = it ?? [])),
      tap((it) => this.currAllLoc.next(it)),
      tap((d) => console.log(d))
    );
  }
}
