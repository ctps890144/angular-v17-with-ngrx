import { Component } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  constructor(private favoriteService: FavoriteService) {}

  get allFav$() {
    return this.favoriteService.getAllFav$;
  }

  remove(id: string) {
    this.favoriteService.remove(id);
  }
}
