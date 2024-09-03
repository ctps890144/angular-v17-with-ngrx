import { Injectable } from '@angular/core';
import { shareReplay, Subject } from 'rxjs';
import type { FavoriteLoc } from '../models/common';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  currFavLoc$: Subject<FavoriteLoc | null> = new Subject();
  getCurrFavLoc$ = this.currFavLoc$.asObservable().pipe(shareReplay(1));

  constructor() {}

  get storageItem() {
    return 'favs';
  }

  setInfo(info: FavoriteLoc[]) {
    localStorage.setItem(this.storageItem, JSON.stringify(info));
  }

  getInfo(): FavoriteLoc[] {
    let info: FavoriteLoc[] = [];
    const storageObj: string | null = localStorage.getItem(this.storageItem);

    if (storageObj !== null && storageObj !== '') {
      try {
        info = JSON.parse(storageObj);
      } catch (error) {
        info = [];
      }
    }

    return info ?? [];
  }

  add(obj: FavoriteLoc) {
    let info = this.getInfo();
    let check = info.findIndex((el) => el.id === obj.id);

    if (check >= 0) {
      info[check] = obj;
    } else {
      info.push(obj);
    }

    this.setInfo(info);
  }

  remove(id: string) {
    let info = this.getInfo().filter((el) => el.id !== id);

    this.setInfo(info);
  }

  removeInfo() {
    localStorage.removeItem(this.storageItem);
  }
}
