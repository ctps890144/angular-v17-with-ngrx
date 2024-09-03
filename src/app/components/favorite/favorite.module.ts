import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [CommonModule, FavoriteRoutingModule, FormsModule, ReactiveFormsModule],
})
export class FavoriteModule {}
