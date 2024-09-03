import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { appPath } from 'src/app/app-path.const';
import type { FavoriteLoc } from 'src/app/models/common';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  readonly path = appPath;

  form = new FormGroup({
    nickname: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private favoriteService: FavoriteService) {}

  get f() {
    return this.form.controls;
  }

  get fav$() {
    return this.favoriteService.getCurrFavLoc$.pipe(
      tap((d) => {
        if (d?.nickname) {
          this.f.nickname.patchValue(d.nickname);
        }
      }),
      tap((d) => {
        if (!d) {
          this.router.navigate(['/', this.path.favorite]);
        }
      })
    );
  }

  save(obj: FavoriteLoc) {
    if (this.form.invalid) {
      alert('資料填寫不完整');
      return;
    }

    obj.nickname = this.f.nickname.value ?? '';
    this.favoriteService.add(obj);
    alert('儲存成功');
    this.router.navigate(['/', this.path.favorite]);
  }
}
