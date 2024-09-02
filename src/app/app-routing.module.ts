import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { appPath } from './app-path.const';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: appPath.home,
    component: HomeComponent,
  },
  {
    path: appPath.favorite,
    loadChildren: () => import('./components/favorite/favorite.module').then((m) => m.FavoriteModule),
  },
  {
    path: '',
    redirectTo: appPath.home,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: appPath.home,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
