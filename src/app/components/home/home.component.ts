import { Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, flatMap, from, map, of, switchMap, tap, toArray } from 'rxjs';
import type { FavoriteLoc, PureOption } from 'src/app/models/common';
import { DataService } from 'src/app/services/data.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categoryList$ = this.dataService.getAllLoc$.pipe(
    switchMap((list) => {
      return from(list).pipe(
        map((it) => it.category),
        flatMap((it) => it),
        toArray()
      );
    })
  );

  categoryFilter = signal<PureOption | undefined>(undefined);
  categoryFilter$ = toObservable(this.categoryFilter).pipe(tap((el) => console.log(el)));

  constructor(private dataService: DataService, private favoriteService: FavoriteService) {
    if (this.dataService.allLoc.length === 0) {
      this.dataService.initAllData().subscribe();
    }
  }

  get allLoc$() {
    return combineLatest([this.dataService.getAllLoc$, this.categoryFilter$]).pipe(
      switchMap(([list, category]) => {
        return of(!category ? list : list.filter((el) => el.category.some((it) => it.id === category.id)));
      })
    );
  }

  addFav(obj: FavoriteLoc) {
    const info = this.favoriteService.getInfo();
    let check = info.findIndex((el) => el.id === obj.id);

    if (check >= 0) {
      alert('資料已存在我的最愛');
    } else {
      this.favoriteService.add(obj);
      alert('已成功加入我的最愛');
    }
  }
}
