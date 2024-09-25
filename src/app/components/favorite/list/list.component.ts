import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { appPath } from 'src/app/app-path.const';
import type { FavoriteLoc } from 'src/app/models/common';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  readonly path = appPath;

  constructor(
    private router: Router,
    private favoriteService: FavoriteService
  ) {
    this.favoriteService.currFavLoc.set(null);
  }

  get allFav$() {
    return this.favoriteService.getAllFav$;
  }

  remove(id: string) {
    this.favoriteService.remove(id);
  }

  edit(obj: FavoriteLoc) {
    this.favoriteService.currFavLoc.set(obj);
    this.router.navigate(['/', this.path.favorite, this.path.favoriteFlow.edit]);
  }
}
