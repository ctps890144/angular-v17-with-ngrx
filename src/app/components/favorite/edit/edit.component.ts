import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appPath } from 'src/app/app-path.const';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  readonly path = appPath;

  isSummit = false;

  form = new FormGroup({
    nickname: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private favoriteService: FavoriteService
  ) {
    const fav = this.favoriteService.currFavLoc();
    if (!fav) {
      this.router.navigate(['/', this.path.favorite]);
    } else {
      this.f.nickname.patchValue(fav.nickname);
    }
  }

  get fav() {
    return this.favoriteService.currFavLoc();
  }

  get f() {
    return this.form.controls;
  }

  save() {
    this.isSummit = true;
    if (this.form.invalid) {
      alert('資料填寫不完整');
      return;
    }

    let obj = this.fav;

    if (obj) {
      obj.nickname = this.f.nickname.value ?? '';
      this.favoriteService.add(obj);
      alert('儲存成功');
    }

    this.router.navigate(['/', this.path.favorite]);
  }
}
