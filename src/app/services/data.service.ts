import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import type { FavoriteLoc } from '../models/common';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private api: ApiService) {}

  getAll() {
    return this.api.getAll().pipe(
      map((it) => {
        return it.data;
      }),
      map((list) => {
        return list.map((el) => {
          const { id, name, address, category } = el;

          return <FavoriteLoc>{ id, name, address, category, nickname: '' };
        });
      })
    );
  }
}
