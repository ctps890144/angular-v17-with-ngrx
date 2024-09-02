import { Component } from '@angular/core';
import { flatMap, from, map, switchMap, toArray } from 'rxjs';
import type { PureOption } from 'src/app/models/common';
import { DataService } from 'src/app/services/data.service';

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

  categoryFilter: PureOption | undefined = undefined;

  constructor(private dataService: DataService) {
    if (this.dataService.allLoc.length === 0) {
      this.dataService.initAllData().subscribe();
    }
  }

  get allLoc() {
    return this.dataService.allLoc;
  }
}
