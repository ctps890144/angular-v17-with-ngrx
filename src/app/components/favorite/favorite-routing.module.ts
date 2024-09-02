import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { appPath } from 'src/app/app-path.const';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const flow = appPath.favoriteFlow;
const routes: Routes = [
  {
    path: flow.list,
    component: ListComponent,
  },
  {
    path: flow.edit,
    component: EditComponent,
  },
  { path: '', redirectTo: flow.list, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteRoutingModule {}
